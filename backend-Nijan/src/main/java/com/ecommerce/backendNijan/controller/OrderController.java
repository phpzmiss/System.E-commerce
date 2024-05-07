package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.OrderDto;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * Get all product.
     *
     * @param pageNo        pageNo
     * @param pageSize      pageSize
     * @param sortBy        sortBy
     * @param sortDirection sortDirection
     * @return list object.
     */
    @GetMapping("/get-all")
    public ApiResponse<?> getAllOrder(
            @RequestParam(value = "page_no", defaultValue = "0") int pageNo,
            @RequestParam(value = "page_size", defaultValue = "10") int pageSize,
            @RequestParam(value = "sort_direction", defaultValue = "asc") String sortDirection,
            @RequestParam(value = "sort_by", defaultValue = "order_id") String sortBy,
            @RequestParam(value = "search_value", defaultValue = "") String searchValue) {
        try {
            PageResponse<OrderDto> product = orderService.getAllByOrder(pageNo, pageSize, sortBy, sortDirection, searchValue);
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
     * Insert order into database.
     *
     * @param order order
     * @return message response.
     */
    @PostMapping("/insert")
    public ApiResponse<?> submitOrder(@RequestBody OrderDto order) {
        try {
            orderService.insert(order);
            return ApiResponse.builder()
                    .code(HttpStatus.OK.value())
                    .message("Order is successfully submitted.")
                    .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
                    .message(exception.getMessage())
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build();
        }
    }

    /**
     * Get order by orderId.
     *
     * @param cartId      cartId
     * @param orderStatus orderStatus
     * @return order response.
     */
    @PutMapping("/update/{cartId}/{orderStatus}")
    public ApiResponse<Boolean> update(@PathVariable Long cartId, @PathVariable String orderStatus) {
        try {
            return ApiResponse.<Boolean>builder()
                    .code(HttpStatus.OK.value())
                    .result(orderService.update(cartId, orderStatus))
                    .message("Order is successfully updated.")
                    .build();
        } catch (Exception exception) {
            return ApiResponse.<Boolean>builder()
                    .message(exception.getMessage())
                    .result(false)
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build();
        }
    }
}
