package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.PictureProductEntity;
import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.IProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository

public interface PictureRepository extends JpaRepository<PictureProductEntity, Long> {

    void deleteAllByProductId(Long productId);
}
