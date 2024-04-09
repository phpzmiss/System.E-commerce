package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.FilterProduct;
import com.ecommerce.backendNijan.model.IProduct;
import com.ecommerce.backendNijan.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    /**
     * Get all product.
     *
     * @return list of entity product.
     */
    public List<IProduct> getAll() {
        return productRepository.findAllProduct();
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
    public List<IProduct> getProductByKey(Long categoryId, Long productId) {
        return productRepository.findProductByKey(productId, categoryId);
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
