package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.CartsEntity;
import com.ecommerce.backendNijan.model.ICart;
import com.ecommerce.backendNijan.model.OrderDto;
import com.ecommerce.backendNijan.response.PageResponse;

import java.util.List;

public interface OrderService {

    void insert(OrderDto orderDto);

    PageResponse<OrderDto> getAllByOrder(int pageNo, int pageSize, String sortBy, String sortDirection,
                                           String searchValue);

    OrderDto getAllByOrderId(Long orderId);

    List<OrderDto> getAllByUserId(Long userId);

    boolean update(Long cartId, String cartStatus);

    List<ICart> getAll();
}
