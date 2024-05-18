package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.FilterProduct;
import com.ecommerce.backendNijan.model.ProductDto;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.response.Product;
import com.ecommerce.backendNijan.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/product")
public class ProductController {

  @Autowired private ProductService productService;

  @GetMapping("/all")
  public ApiResponse<?> getAllProducts() {
    List<Product> products = productService.getAll();

    return ApiResponse.builder().result(products).code(HttpStatus.OK.value()).build();
  }

  @GetMapping()
  public ApiResponse<?> getProductById(@RequestParam(value = "category_id") Long categoryId,
                                    @RequestParam(value = "product_id") Long productId) {
    try {
      Product product = productService.getProductByKey(categoryId, productId);
      return ApiResponse.builder()
        .code(HttpStatus.OK.value())
        .result(product)
        .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
        .message(exception.getMessage())
        .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
        .build();
    }
  }

  /**
   * Get all product.
   *
   * @param pageNo        pageNo
   * @param pageSize      pageSize
   * @param sortBy        sortBy
   * @param sortDirection sortDirection
   * @return list object.
   */
  @GetMapping(value = "/init/pageable")
  public ApiResponse<?> selectAllProduct(
          @RequestParam(value = "page_no", defaultValue = "0") int pageNo,
          @RequestParam(value = "page_size", defaultValue = "10") int pageSize,
          @RequestParam(value = "sort_direction", defaultValue = "asc") String sortDirection,
          @RequestParam(value = "sort_by", defaultValue = "product_id") String sortBy,
          @RequestParam(value = "search_value", defaultValue = "") String searchValue) {
    try {
      FilterProduct filterProduct = FilterProduct.builder()
              .pageNo(pageNo)
              .pageSize(pageSize)
              .sortDirection(sortDirection)
              .sortBy(sortBy)
              .searchValue(searchValue)
              .build();
      PageResponse<ProductDto> product = productService.getAllBySearchValue(filterProduct, searchValue);
      return ApiResponse.builder()
              .result(product)
              .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
    }
  }

  /**
   * Get all product.
   *
   * @param filterProduct        filterProduct
   * @return list object.
   */
  @GetMapping(value = "/init/filter")
  public ApiResponse<?> selectAllProduct(@RequestParam(value = "page_no", defaultValue = "0") int pageNo,
                                         @RequestParam(value = "page_size", defaultValue = "10") int pageSize,
                                         @RequestParam(value = "sort_direction", defaultValue = "asc") String sortDirection,
                                         @RequestParam(value = "sort_by", defaultValue = "product_id") String sortBy,
                                         @RequestParam(value = "category_id", defaultValue = "") Long categoryId) {
    try {
      FilterProduct filterProduct = FilterProduct.builder()
        .pageNo(pageNo)
        .pageSize(pageSize)
        .sortDirection(sortDirection)
        .sortBy(sortBy)
        .categoryId(categoryId.equals(0L) ? null : categoryId)
        .build();
      PageResponse<ProductDto> product = productService.getAll(filterProduct);
      return ApiResponse.builder()
              .result(product)
              .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
    }
  }

  /**
   * Register new product.
   *
   * @param product product
   * @return response entity
   */
  @PostMapping(value = "/insert")
  public ApiResponse<?> registerProduct(@ModelAttribute ProductDto product)
          throws IOException {
    try {
      productService.insert(product);
      return ApiResponse.builder()
              .code(HttpStatus.OK.value())
              .message("Data successfully registered.")
              .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
    }
  }

  /**
   * Register new product.
   *
   * @param product product
   * @return response entity
   */
  @PostMapping(value = "/update")
  public ApiResponse<?> updateProduct(@ModelAttribute ProductDto product)
    throws IOException {
    try {
      productService.update(product);
      return ApiResponse.builder()
        .code(HttpStatus.OK.value())
        .message("Data successfully registered.")
        .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
        .message(exception.getMessage())
        .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
        .build();
    }
  }

  /**
   * Delete product.
   *
   * @param productId  productId
   * @return response 200 or response 500
   */
  @DeleteMapping(value = "/delete")
  public ApiResponse<?> updateCategory(@RequestParam(value = "product_id") Long productId) {
    try {
      boolean deleted = productService.delete(productId);
      return ApiResponse.builder()
              .result(deleted)
              .message("Deleted product successfully.")
              .build();
    } catch (Exception exception) {
      return ApiResponse.builder()
              .result(false)
              .message(exception.getMessage())
              .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
              .build();
    }
  }

}
