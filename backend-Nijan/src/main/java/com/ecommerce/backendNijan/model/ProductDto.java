package com.ecommerce.backendNijan.model;


import com.ecommerce.backendNijan.response.PictureProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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

  private BigDecimal productDiscountValue;

  private Integer quantity;

  private String productTags;

  private String createdAt;

  private List<MultipartFile> files;

  private List<PictureUpload> productImages;

  private List<PictureProduct> pictureDtoList;
}
