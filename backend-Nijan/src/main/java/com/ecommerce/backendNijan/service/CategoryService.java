package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.CategoryEntity;
import com.ecommerce.backendNijan.model.CategoryDto;
import com.ecommerce.backendNijan.model.ICategory;
import com.ecommerce.backendNijan.response.PageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    /**
     * Get all category.
     *
     * @return list of entity category.
     */
    List<CategoryDto> getAll();

    /**
     * Get all category.
     *
     * @return list of entity category.
     */
    PageResponse<ICategory> getAllCategoryPage(int page, int size, String sortBy,
                                               String sortDir, String searchValue);

    /**
     * Get all category.
     *
     * @param sortBy sortBy
     * @param searchValue searchValue
     * @param pageable pageable
     * @return list of entity category.
     */
    Page<ICategory> getAllCategoryPage(String sortBy, String searchValue, Pageable pageable);

    /**
     * Get all category.
     *
     * @return list of entity category.
     */
    Optional<CategoryDto> getCategoryByPrimaryKey(Long categoryId);

    /**
     * Get all category.
     *
     * @return list of entity category.
     */
    CategoryEntity insert(CategoryDto dto);

    /**
     * Get all category.
     *
     * @return list of entity category.
     */
    CategoryEntity update(CategoryDto dto);
}
