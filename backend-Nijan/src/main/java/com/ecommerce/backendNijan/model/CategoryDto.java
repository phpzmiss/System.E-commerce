package com.ecommerce.backendNijan.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryDto {

  private Long categoryId;

  private String categoryName;

  private String categoryDescription;

  private String categoryTags;

  private String categorySlug;

  private String createDate;

  private String status;
}
