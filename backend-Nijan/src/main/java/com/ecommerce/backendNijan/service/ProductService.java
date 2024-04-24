package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.FilterProduct;
import com.ecommerce.backendNijan.model.IProduct;
import com.ecommerce.backendNijan.model.ProductDto;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.response.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    /**
     * Get all product.
     *
     * @return list of entity product.
     */
    public List<Product> getAll();

    /**
     * Get all product.
     *
     * @param searchValue searchValue
     * @return list of entity product.
     */
    public PageResponse<ProductDto> getAllBySearchValue(FilterProduct filterProduct, String searchValue);

    /**
     * Get all product.
     *
     * @param filterProduct filterProduct
     * @return list of entity product.
     */
    public PageResponse<ProductDto> getAll(FilterProduct filterProduct);

    /**
     * Get all product.
     *
     * @param categoryId categoryId
     * @param limitItem  limitItem
     * @return list of entity product.
     */
    public List<IProduct> getAll(Long categoryId, Integer limitItem);

    /**
     * Get product item.
     *
     * @return entity product.
     */
    public Product getProductByKey(Long categoryId, Long productId);

    /**
     * Get product item.
     *
     * @return entity product.
     */
    public Optional<ProductEntity> getProductById(Long categoryId, Long productId);

    /**
     * Insert.
     */
    void insert(ProductDto productDto) throws IOException;

    /**
     * Insert.
     */
    void update(ProductDto productDto);

    /**
     * Delete
     * @param productId
     * @return
     */
    boolean delete(Long productId);
}
