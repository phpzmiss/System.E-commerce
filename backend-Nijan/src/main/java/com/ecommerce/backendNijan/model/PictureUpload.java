package com.ecommerce.backendNijan.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
public class PictureUpload {

    private MultipartFile file;

    private Long pictureId;
}
