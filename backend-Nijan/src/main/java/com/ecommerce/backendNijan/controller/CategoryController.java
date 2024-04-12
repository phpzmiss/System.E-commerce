package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.CategoryDto;
import com.ecommerce.backendNijan.model.ICategory;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping()
    public ApiResponse<?> getCategoryById(@RequestParam(value = "category_id") Long categoryId) {
        try {
            Optional<CategoryDto> categoryDtos = categoryService.getCategoryByPrimaryKey(categoryId);
            if (categoryDtos.isEmpty()) {
                return ApiResponse.builder()
                  .code(HttpStatus.BAD_REQUEST.value())
                  .message("Category not found")
                  .build();
            }
            return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .result(categoryDtos)
              .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
        }
    }

    @GetMapping("/list")
    public ApiResponse<?> getAll() {
        try {
            List<CategoryDto> categoryDtos = categoryService.getAll();
            return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .result(categoryDtos)
              .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
        }
    }

    /**
     * Get all category.
     *
     * @param pageNo        page_no
     * @param pageSize      page_size
     * @param sortDirection sort_direction
     * @param sortBy        sort_by
     * @return list object.
     */
    @GetMapping(value = "/all/page")
    public ApiResponse<?> selectAllCategoryPaginated(
      @RequestParam(value = "page_no", defaultValue = "0") int pageNo,
      @RequestParam(value = "page_size", defaultValue = "10") int pageSize,
      @RequestParam(value = "sort_direction", defaultValue = "asc") String sortDirection,
      @RequestParam(value = "sort_by", defaultValue = "category_id") String sortBy,
      @RequestParam(value = "search_value", defaultValue = "") String searchValue) {
        try {
            PageResponse<ICategory> categoryDtos = categoryService.getAllCategoryPage(pageNo, pageSize, sortBy, sortDirection, searchValue);
            return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .result(categoryDtos)
              .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
        }
    }

    /**
     * Register new category.
     *
     * @param categoryModel categoryModel
     * @return response entity
     */
    @PostMapping(value = "/register")
    public ApiResponse<?> registerCategory(@RequestBody CategoryDto categoryModel) {
        try {
            categoryService.insert(categoryModel);
            return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .message("Data successfully registered")
              .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
        }
    }

    /**
     * Update category.
     *
     * @param categoryModel categoryModel
     * @param categoryId    categoryId
     * @return response entity
     */
    @PutMapping(value = "/update/{categoryId}")
    public ApiResponse<?> updateCategory(@RequestBody CategoryDto categoryModel, @PathVariable final Long categoryId) {
        try {
            categoryModel.setCategoryId(categoryId);
            categoryService.update(categoryModel);
            return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .message("Data successfully updated")
              .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
        }
    }
}
