package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.ContactEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, Long> {

    /**
     * Get all contact.
     *
     * @return list of contact.
     */
    @Query(value = "SELECT * FROM tbl_contact contact",
            nativeQuery = true, countQuery = "SELECT COUNT(*) FROM tbl_contact contact")
    Page<ContactEntity> findAllPageable(Pageable pageable);

}
