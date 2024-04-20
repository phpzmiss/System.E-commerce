package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.FilterProduct;
import com.ecommerce.backendNijan.model.IProduct;
import com.ecommerce.backendNijan.response.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CartService {

    /**
     * Get all product.
     *
     * @return list of entity product.
     */
    public List<Product> getAll();

    /**
     * Get all product.
     *
     * @param pageable    pageable
     * @param searchValue searchValue
     * @return list of entity product.
     */
    public Page<IProduct> getAll(Pageable pageable, String searchValue);

    /**
     * Get all product.
     *
     * @param filterProduct filterProduct
     * @param pageable      pageable
     * @return list of entity product.
     */
    public Page<IProduct> getAll(FilterProduct filterProduct, Pageable pageable);

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

}
