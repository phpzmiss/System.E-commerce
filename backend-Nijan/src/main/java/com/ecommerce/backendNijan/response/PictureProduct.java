package com.ecommerce.backendNijan.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PictureProduct {

    private Long pictureId;

    private String pictureName;

    private String pictureType;

    private String pictureData; // Base64

}
