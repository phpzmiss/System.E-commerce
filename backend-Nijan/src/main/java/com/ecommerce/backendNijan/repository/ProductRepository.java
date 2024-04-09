package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.IProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    /**
     * Get all product.
     *
     * @return list of product.
     */
    @Query(value =
            "SELECT category.category_id AS categoryId, "
                    + " category.name AS categoryName, "
                    + " product.product_id AS productId, "
                    + " product.title AS title, "
                    + " product.summary AS summary, "
                    + " product.description AS description, "
                    + " product.price AS price, "
                    + " product.quantity AS quantity, "
                    + " product.discount_type AS discountType, "
                    + " product.discount_value AS discountValue, "
                    + " product.tags AS tags"
                    + " FROM tbl_category category "
                    + " INNER JOIN tbl_product product ON product.category_id = category.category_id",
            nativeQuery = true)
    List<IProduct> findAllProduct();

    /**
     * Get all product.
     *
     * @param categoryId categoryId
     * @param limitItem  limitItem
     * @return list of product.
     */
    @Query(value =
            "SELECT category.category_id AS categoryId, "
                    + " category.name AS categoryName, "
                    + " product.product_id AS productId, "
                    + " product.title AS title, "
                    + " product.summary AS summary, "
                    + " product.description AS description, "
                    + " product.price AS price, "
                    + " product.quantity AS quantity, "
                    + " product.discount_type AS discountType, "
                    + " product.discount_value AS discountValue, "
                    + " product.tags AS tags"
                    + " pic.picture_id AS pictureId, "
                    + " pic.file_name AS fileName, "
                    + " pic.file_type AS fileType, "
                    + " pic.data AS fileSize "
                    + " FROM  tbl_category category"
                    + " INNER JOIN tbl_product product ON product.category_id = category.category_id"
                    + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id "
                    + " WHERE category.category_id = ?1"
                    + " ORDER BY product.product_id, pic.picture_id"
                    + " LIMIT ?2",
            nativeQuery = true)
    List<IProduct> findAllProduct(Long categoryId, Integer limitItem);

    /**
     * Get all product.
     *
     * @param pageable pageable
     * @return list of product.
     */
    @Query(value = "SELECT DISTINCT(product.product_id) AS productId,"
            + " category.category_id AS categoryId, "
            + " category.name AS categoryName, "
            + " product.title AS title, "
            + " product.summary AS summary, "
            + " product.description AS description, "
            + " product.price AS price, "
            + " product.quantity AS quantity, "
            + " product.discount_type AS discountType, "
            + " product.discount_value AS discountValue, "
            + " product.tags AS tags"
            + " pic.picture_id AS pictureId, "
            + " pic.file_name AS fileName, "
            + " pic.file_type AS fileType, "
            + " pic.data AS fileSize "
            + " FROM tbl_product product "
            + " INNER JOIN tbl_category category ON product.category_id = category.category_id"
            + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id"
            + " WHERE product.title LIKE %?1% OR category.name LIKE %?1% OR product.price LIKE %?1%",
            nativeQuery = true,
            countQuery = "SELECT COUNT(*) "
            + " FROM tbl_product product "
            + " INNER JOIN tbl_category category ON product.category_id = category.category_id"
            + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id"
            + " WHERE product.title LIKE %?1% OR category.name LIKE %?1% OR product.price LIKE %?1%")
    Page<IProduct> findAllProduct(String searchValue, Pageable pageable);

    /**
     * Get all product.
     *
     * @param pageable pageable
     * @return list of product.
     */
    @Query(value = "SELECT DISTINCT(product.product_id) AS productId,"
            + " category.category_id AS categoryId, "
            + " category.name AS categoryName, "
            + " product.title AS title, "
            + " product.summary AS summary, "
            + " product.description AS description, "
            + " product.price AS price, "
            + " product.quantity AS quantity, "
            + " product.discount_type AS discountType, "
            + " product.discount_value AS discountValue, "
            + " product.tags AS tags"
            + " pic.picture_id AS pictureId, "
            + " pic.file_name AS fileName, "
            + " pic.file_type AS fileType, "
            + " pic.data AS fileSize "
            + " FROM tbl_product product "
            + " INNER JOIN tbl_category category ON product.category_id = category.category_id"
            + " AND ((?2 IS NOT NULL AND category.category_id = ?2) OR (?2 IS NULL AND category.category_id IS NOT NULL))"
            + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id"
            + " WHERE (product.title LIKE %?1% OR category.name LIKE %?1% OR product.price"
            + " LIKE %?1%) OR (product.price >= ?3"
            + " AND product.price <=?4 AND product.price IS NOT NULL)",
            nativeQuery = true,
            countQuery = "SELECT COUNT(*) "
                    + " FROM tbl_product product "
                    + " INNER JOIN tbl_category category ON product.category_id = category.category_id"
                    + " AND ((?2 IS NOT NULL AND category.category_id = ?2) OR (?2 IS NULL AND category.category_id IS NOT NULL))"
                    + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id"
                    + " WHERE (product.title LIKE %?1% OR category.name LIKE %?1% OR product.price"
                    + " LIKE %?1%) OR (product.price >= ?3"
                    + " AND product.price <=?4 AND product.price IS NOT NULL)")
    Page<IProduct> findAllProduct(String searchValue, Long categoryId, BigDecimal priceMin,
                                  BigDecimal priceMax, Pageable pageable);

    /**
     * Get information of product.
     *
     * @return product.
     */
    @Query(value = "SELECT category.category_id AS categoryId, "
            + " category.name AS categoryName, "
            + " product.product_id AS productId, "
            + " product.title AS title, "
            + " product.summary AS summary, "
            + " product.description AS description, "
            + " product.price AS price, "
            + " product.quantity AS quantity, "
            + " product.discount_type AS discountType, "
            + " product.discount_value AS discountValue, "
            + " product.tags AS tags"
            + " pic.picture_id AS pictureId, "
            + " pic.file_name AS fileName, "
            + " pic.file_type AS fileType, "
            + " pic.data AS fileSize, "
            + " pic.image_code AS fileCode"
            + " FROM tbl_category category"
            + " INNER JOIN tbl_product product ON product.category_id = category.category_id"
            + " LEFT JOIN tbl_picture pic ON product.product_id = pic.product_id"
            + " WHERE product.product_id = ?1 AND product.category_id = ?2", nativeQuery = true)
    List<IProduct> findProductByKey(Long productId, Long categoryId);

    /**
     * Get information of product.
     *
     * @return product.
     */
    @Query(value = "SELECT "
            + " MAX(product.product_id) AS productId "
            + " FROM tbl_product product", nativeQuery = true)
    Long getProductIdLast();

    /**
     * Find by id
     *
     * @param productId productId
     * @return product
     */
    Optional<ProductEntity> findByProductId(Long productId);
}
