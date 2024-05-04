package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.CredentialsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CredentialsRepository extends JpaRepository<CredentialsEntity, Long> {
}
