package com.ecommerce.backendNijan.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
public class CartItemsEntityKey implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "cart_id", nullable = false)
    private Long cartId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    /**
     * Set PK.
     *
     * @param cartId  cartId
     * @param productId productId
     * @return key.
     */
    public CartItemsEntityKey setPk(Long cartId, Long productId) {
        setCartId(cartId);
        setProductId(productId);
        return this;
    }

}
