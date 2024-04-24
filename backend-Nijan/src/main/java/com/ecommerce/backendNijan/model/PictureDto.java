package com.ecommerce.backendNijan.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PictureDto {

    private Long pictureId;

    private String fileName;

    private String fileData;

    private String fileType;

    private String pictureBase64;
}
