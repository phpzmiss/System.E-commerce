package com.ecommerce.backendNijan.model;

public interface IProduct {

    String getCategoryId();

    String getCategoryName();

    String getProductId();

    String getTitle();

    String getSummary();

    String getDescription();

    String getPrice();

    Integer getQuantity();

    String getDiscountType();

    String getDiscountValue();

    String getTags();

    Long getPictureId();

    String getFileName();

    String getFileType();

    byte[] getFileSize();
}