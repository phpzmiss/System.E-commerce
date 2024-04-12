package com.ecommerce.backendNijan.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

  private Long categoryId;

  private String categoryName;

  private Long productId;

  private String productName;

  private String title;

  private String summary;

  private String description;

  private String price;

  private Integer quantity;

  private String discountType;

  private String discountValue;

  private String tags;

  private List<PictureProduct> pictureProductList;
}
