package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.CartsEntity;
import com.ecommerce.backendNijan.model.ICart;
import com.ecommerce.backendNijan.model.ICategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartsEntity, Long> {

    /**
     * Get all category.
     *
     * @return list
     */
    @Query(value = "SELECT category.category_id AS categoryId, "
      + " category.category_description AS categoryDescription,"
      + " category.category_name AS categoryName, "
      + " category.created_date AS createdDate,"
      + " category.updated_date AS updatedDate, category.status AS categoryStatus"
      + " FROM tbl_category category"
      + " WHERE category.category_name LIKE %?3%"
      + " ORDER BY category.category_name ASC "
      + " LIMIT ?2 OFFSET ?1", nativeQuery = true)
    List<ICategory> findAllCategory(int pageNo, int pageSize, String searchValue);

    @Query(value = "SELECT c.cart_id AS cartId, c.cart_number AS cartNumber,"
      + " ci.quantity AS quantity, ci.price AS price, p.product_id AS productId,"
      + " p.title AS productName, "
    + " FROM tbl_carts c "
    + " INNER JOIN tbl_cart_items ci ON ci.cart_id = c.cart_id "
    + " INNER JOIN tbl_product p ON p.product_id = ci.product_id"
    + " WHERE c.cart_id = ?1", nativeQuery = true)
    List<ICart> findByCartId(Long cartId);

}
