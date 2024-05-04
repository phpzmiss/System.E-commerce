package com.ecommerce.backendNijan.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_picture")
@Entity
@Data
public class PictureProductEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "picture_id", nullable = false)
    private Long pictureId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "file_name", length = 3000)
    private String fileName;

    @Column(name = "file_type", nullable = false)
    private String fileType;

    @Column(name = "data", nullable = false)
    private byte[] data;


}
