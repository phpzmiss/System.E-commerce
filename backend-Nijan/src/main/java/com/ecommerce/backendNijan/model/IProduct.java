package com.ecommerce.backendNijan.model;

import java.math.BigDecimal;

public interface IProduct {

    String getCategoryId();

    String getCategoryName();

    String getProductId();

    String getTitle();

    String getSummary();

    String getDescription();

    BigDecimal getPrice();

    Integer getQuantity();

    String getDiscountType();

    String getDiscountValue();

    String getTags();

    Long getPictureId();

    String getFileName();

    String getFileType();

    byte[] getFileSize();
}
