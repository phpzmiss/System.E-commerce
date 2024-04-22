package com.ecommerce.backendNijan.model;

import java.math.BigDecimal;

public interface ICart {

    Long getCartId();

    String getCartNumber();

    Long getQuantity();

    BigDecimal getPrice();

    Long getProductId();

    String getProductName();

    Double getDiscountType();

}
