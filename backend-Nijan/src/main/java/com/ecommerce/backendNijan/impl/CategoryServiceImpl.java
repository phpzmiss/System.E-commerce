package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.constants.StatusCode;
import com.ecommerce.backendNijan.entity.CategoryEntity;
import com.ecommerce.backendNijan.model.CategoryDto;
import com.ecommerce.backendNijan.model.ICategory;
import com.ecommerce.backendNijan.repository.CategoryRepository;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.CategoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CommonService commonService;

    @Override
    public List<CategoryDto> getAll() {
        return categoryRepository.findAllByOrderByCategoryIdAsc().stream()
          .map(e -> CategoryDto.builder()
            .categoryId(e.getCategoryId())
            .categoryName(e.getName())
            .categoryDescription(e.getDescription())
            .categorySlug(e.getSlug())
            .categoryTags(e.getTags())
            .createDate(CommonService.convertLocalDateTimeToString(e.getCreatedAt()).split(" ")[0])
            .status(StatusCode.ACTIVE.getCode().equals(e.getStatus()) ? StatusCode.ACTIVE.getDescription() : StatusCode.INACTIVE.getDescription())
            .build())
          .toList();
    }

    @Override
    public PageResponse<CategoryDto> getAllCategoryPage(int page, int size, String sortBy,
                                                      String sortDir, String searchValue) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name())
          ? Sort.by("category_id").ascending().and(Sort.by(sortBy).ascending())
          : Sort.by("category_id").descending().and(Sort.by(sortBy).descending());

        // Create pageable instance
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<ICategory> categoryModelListPage = categoryRepository.findAllCategory(sortBy, searchValue, pageable);

        // Get content for page object
        List<ICategory> listOfCategoryModel = categoryModelListPage.getContent();
        List<CategoryDto> categoryDtos = listOfCategoryModel.stream()
          .map(e -> CategoryDto.builder()
            .categoryId(e.getCategoryId())
            .categoryName(e.getCategoryName())
            .categoryDescription(e.getCategoryDescription())
            .categorySlug(e.getCategorySlug())
            .categoryTags(e.getCategoryTags())
            .createDate(CommonService.convertLocalDateTimeToString(e.getCreatedDate()).split(" ")[0])
            .status(StatusCode.ACTIVE.getCode().equals(e.getCategoryStatus()) ? StatusCode.ACTIVE.getDescription() : StatusCode.INACTIVE.getDescription())
            .build())
          .toList();

        return PageResponse.<CategoryDto>builder()
          .result(categoryDtos)
          .pageNo(categoryModelListPage.getNumber())
          .pageSize(categoryModelListPage.getSize())
          .totalElements(categoryModelListPage.getTotalElements())
          .totalPages(categoryModelListPage.getTotalPages())
          .last(categoryModelListPage.isLast())
          .build();
    }

    @Override
    public Page<ICategory> getAllCategoryPage(String sortBy, String searchValue, Pageable pageable) {
        return categoryRepository.findAllCategory(sortBy, searchValue, pageable);
    }

    @Override
    public Optional<CategoryDto> getCategoryByPrimaryKey(Long categoryId) {
        Optional<CategoryEntity> entity = categoryRepository.findById(categoryId);
        if (entity.isPresent()) {
            CategoryDto categoryDto = new CategoryDto();
            categoryDto.setCategoryId(entity.get().getCategoryId());
            categoryDto.setCategoryName(entity.get().getName());
            categoryDto.setCategoryDescription(entity.get().getDescription());
            categoryDto.setCategoryTags(entity.get().getTags());
            categoryDto.setCategorySlug(entity.get().getSlug());
            return Optional.of(categoryDto);
        }

        return Optional.empty();
    }

    @Override
    public CategoryEntity insert(CategoryDto dto) {
        return categoryRepository.save(this.toCategoryEntity(dto, false));
    }


    @Override
    public CategoryEntity update(CategoryDto dto) {
        return categoryRepository.save(this.toCategoryEntity(dto, true));
    }

    /**
     * Delete
     *
     * @param categoryId
     * @return
     */
    @Override
    public boolean deleteCategory(Long categoryId) {
        try {
            categoryRepository.deleteById(categoryId);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    /**
     * To category entity.
     *
     * @param dto
     * @param isUpdate
     * @return CategoryEntity
     */
    private CategoryEntity toCategoryEntity(CategoryDto dto, boolean isUpdate) {
        CategoryEntity entity = new CategoryEntity();
        if (isUpdate) {
            entity.setCategoryId(dto.getCategoryId());
            commonService.setCommonUpdateEntity(entity);
        } else {
            commonService.setCommonCreatedEntity(entity);
        }
        entity.setParentCategory(0L);
        entity.setName(dto.getCategoryName());
        entity.setDescription(dto.getCategoryDescription());
        entity.setSlug(commonService.toSlug(dto.getCategoryName()));
        entity.setStatus(StatusCode.ACTIVE.getCode());
        return entity;
    }
}
