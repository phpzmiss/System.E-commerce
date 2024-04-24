package com.ecommerce.backendNijan.model;


import com.ecommerce.backendNijan.response.PictureProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {

  private Long categoryId;

  private Long productId;

  private String productTitle;

  private String productDescription;

  private String productSummary;

  private BigDecimal productPrice;

  private String productDiscountValue;

  private Integer quantity;

  private String productTags;

  private List<PictureUpload> productImages;

  private List<PictureProduct> pictureDtoList;
}
