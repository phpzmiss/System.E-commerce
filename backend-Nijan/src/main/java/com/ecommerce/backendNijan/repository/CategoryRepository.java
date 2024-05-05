package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.CategoryEntity;
import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.ICategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {

    /**
     * Get all category.
     *
     * @return list
     */
    @Query(value = "SELECT category.category_id AS categoryId, "
      + " category.category_description AS categoryDescription,"
      + " category.category_name AS categoryName, "
      + " category.created_date AS createdDate,"
      + " category.updated_date AS updatedDate, category.status AS categoryStatus"
      + " FROM tbl_category category"
      + " WHERE category.category_name LIKE %?3%"
      + " ORDER BY category.category_name ASC "
      + " LIMIT ?2 OFFSET ?1", nativeQuery = true)
    List<ICategory> findAllCategory(int pageNo, int pageSize, String searchValue);

    /**
     * Get all category.
     *
     * @return list
     */
    @Query(value = "SELECT category.category_id AS categoryId, "
      + " category.description AS categoryDescription,"
      + " category.name AS categoryName, category.slug AS categorySlug, "
      + " category.created_at AS createdDate,"
      + " category.updated_at AS updatedDate, category.status AS categoryStatus"
      + " FROM tbl_category category"
      + " WHERE category.name LIKE %?2%"
      + " ORDER BY ?1",
      nativeQuery = true,
      countQuery = " SELECT count(*)"
        + " FROM tbl_category category"
        + " WHERE category.name LIKE %?2%"
        + " ORDER BY ?1"
    )
    Page<ICategory> findAllCategory(String sortBy, String searchValue, Pageable pageable);

    /**
     * Get all category.
     *
     * @return list
     */
    List<CategoryEntity> findAllByOrderByCategoryIdAsc();

}
