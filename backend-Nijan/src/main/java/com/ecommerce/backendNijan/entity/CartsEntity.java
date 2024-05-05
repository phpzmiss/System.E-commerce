package com.ecommerce.backendNijan.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_carts")
@Entity
@Data
public class CartsEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id", nullable = false)
    private Long cartId;

    @Column(name = "order_id", nullable = false)
    private Long orderId;

    @Column(name = "cart_number", nullable = false)
    private String cartNumber;

    @Column(name = "status", nullable = false)
    private String status;

}
