package com.ecommerce.backendNijan.entity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import lombok.Data;

import java.time.LocalDateTime;

@MappedSuperclass
@Data
public abstract class BaseEntity {

    @Column(name = "created_by", nullable = false)
    private Integer createdBy;

    @Column(name = "updated_by", nullable = true)
    private Integer updatedBy;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = true)
    private LocalDateTime updatedAt;

}
