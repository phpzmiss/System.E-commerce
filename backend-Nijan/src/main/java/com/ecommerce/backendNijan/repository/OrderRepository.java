package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.OrderEntity;
import com.ecommerce.backendNijan.model.CartDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    @Query(value = "SELECT ca.cart_id AS cartId, od.order_id AS orderId, us.user_id AS userId,"
            + " ca.cart_number AS cartNumber, us.address AS address, ca.status AS cartStatus, od.created_at AS createdDate,"
            + " COALESCE(cai.quantity, 0) AS quantity, COALESCE(cai.price) AS price, us.full_name AS fullName"
            + " FROM tbl_order od "
            + " INNER JOIN tbl_carts ca ON ca.order_id = od.order_id"
            + " INNER JOIN tbl_users us ON us.user_id = od.user_id"
            + " INNER JOIN tbl_cart_items cai ON cai.cart_id = ca.cart_id"
            , nativeQuery = true, countQuery = " SELECT COUNT(*) "
            + " FROM tbl_order od "
            + " INNER JOIN tbl_carts ca ON ca.order_id = od.order_id"
            + " INNER JOIN tbl_users us ON us.user_id = od.user_id"
            + " INNER JOIN tbl_cart_items cai ON cai.cart_id = ca.cart_id")
    Page<CartDto> findAllPageable(Pageable pageable);
}
