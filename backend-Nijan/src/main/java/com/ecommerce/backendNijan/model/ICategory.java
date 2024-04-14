package com.ecommerce.backendNijan.model;

import java.time.LocalDateTime;
import java.util.Date;

public interface ICategory {

  Long getCategoryId();

  String getCategoryDescription();

  String getCategoryName();

  String getCategorySlug();

  String getCategoryTags();

  LocalDateTime getCreatedDate();

  LocalDateTime getUpdatedDate();

}
