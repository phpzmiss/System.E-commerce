package com.ecommerce.backendNijan.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface IProduct {

    Long getCategoryId();

    String getCategoryName();

    Long getProductId();

    String getTitle();

    String getSummary();

    String getDescription();

    BigDecimal getPrice();

    Integer getQuantity();

    String getDiscountType();

    BigDecimal getDiscountValue();

    String getTags();

    Long getPictureId();

    String getFileName();

    String getFileType();

    byte[] getFileSize();

    LocalDateTime getCreatedAt();
}
