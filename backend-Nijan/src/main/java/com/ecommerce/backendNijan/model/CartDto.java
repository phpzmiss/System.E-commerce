package com.ecommerce.backendNijan.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface CartDto {

    Long getCartId();

    Long getOrderId();

    Long getUserId();

    String getCartNumber();

    String getAddress();

    String getFullName();

    String getCartStatus();

    LocalDateTime getCreatedDate();

    BigDecimal getPrice();

    Integer getQuantity();
}
