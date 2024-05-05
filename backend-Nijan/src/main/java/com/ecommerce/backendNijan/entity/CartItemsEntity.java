package com.ecommerce.backendNijan.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.math.BigDecimal;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_cart_items")
@Entity
@IdClass(CartItemsEntityKey.class)
@Data
public class CartItemsEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "cart_id", nullable = false)
    private Long cartId;

    @Id
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "quantity")
    private Long quantity;

}
