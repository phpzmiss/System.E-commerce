package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.CategoryDto;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.Product;
import com.ecommerce.backendNijan.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/product")
public class ProductController {

  @Autowired private ProductService productService;

  @GetMapping("/all")
  public ApiResponse getAllProducts() {
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
}
