package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.FilterProduct;
import com.ecommerce.backendNijan.model.IProduct;
import com.ecommerce.backendNijan.repository.ProductRepository;
import com.ecommerce.backendNijan.response.PictureProduct;
import com.ecommerce.backendNijan.response.Product;
import com.ecommerce.backendNijan.service.ProductService;
import io.micrometer.common.util.StringUtils;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductRepository productRepository;

  /**
   * Get all product.
   *
   * @return list of entity product.
   */
  public List<Product> getAll() {
    return productRepository.findAllProduct().stream()
        .map(pro -> {
          Product p = new Product();
          BeanUtils.copyProperties(pro, p);
          return p;
        })
        .toList();
  }

  /**
   * Get all product.
   *
   * @param pageable    pageable
   * @param searchValue searchValue
   * @return list of entity product.
   */
  public Page<IProduct> getAll(Pageable pageable, String searchValue) {
    return productRepository.findAllProduct(searchValue, pageable);
  }

  /**
   * Get all product.
   *
   * @param filterProduct filterProduct
   * @param pageable      pageable
   * @return list of entity product.
   */
  public Page<IProduct> getAll(FilterProduct filterProduct, Pageable pageable) {
    return productRepository
        .findAllProduct(filterProduct.getSearchValue(), filterProduct.getCategoryId(),
            filterProduct.getPriceMin(), filterProduct.getPriceMax(), pageable);
  }

  /**
   * Get all product.
   *
   * @param categoryId categoryId
   * @param limitItem  limitItem
   * @return list of entity product.
   */
  public List<IProduct> getAll(Long categoryId, Integer limitItem) {
    return productRepository.findAllProduct(categoryId, limitItem);
  }

  /**
   * Get product item.
   *
   * @return entity product.
   */
  public Product getProductByKey(Long categoryId, Long productId) {
    List<IProduct> productList = new ArrayList<>(productRepository.findProductByKey(productId, categoryId));
    List<PictureProduct> pictureProductList = new ArrayList<>();
    if (CollectionUtils.isEmpty(productList)) {
      return null;
    }
    IProduct iProduct = productList.get(0);
    productList.forEach(product -> {
      pictureProductList.add(PictureProduct.builder()
        .pictureId(product.getPictureId())
        .pictureName(product.getFileName())
        .pictureType(product.getFileType())
        .pictureData("data:image/png;base64," + (Objects.nonNull(product.getFileSize())
          ? Base64.getEncoder().encodeToString(product.getFileSize())
          : Strings.EMPTY))
        .build());
    });
    return Product.builder()
      .productId(productId)
      .categoryId(categoryId)
      .categoryName(iProduct.getCategoryName())
      .productName(iProduct.getTitle())
      .summary(iProduct.getSummary())
      .description(iProduct.getDescription())
      .price(Objects.nonNull(iProduct.getPrice()) ? Strings.EMPTY : String.valueOf(iProduct.getPrice()))
      .quantity(iProduct.getQuantity())
      .discountType(iProduct.getDiscountType())
      .discountValue(iProduct.getDiscountValue())
      .tags(iProduct.getTags())
      .pictureProductList(pictureProductList)
      .build();
  }

  /**
   * Get product item.
   *
   * @return entity product.
   */
  public Optional<ProductEntity> getProductById(Long categoryId, Long productId) {
    return productRepository.findById(productId);
  }
}
