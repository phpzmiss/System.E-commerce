package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.*;
import com.ecommerce.backendNijan.model.ICart;
import com.ecommerce.backendNijan.model.OrderDto;
import com.ecommerce.backendNijan.repository.*;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    CommonService commonService;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItemsRepository cartItemsRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    /**
     * @param orderDto
     * @return
     */
    @Override
    public void insert(OrderDto orderDto) {
        Long userId = orderDto.getUser().getUserId();
        if (Objects.isNull(userId)) {
            UserEntity userEntity = userRepository.save(toUser(orderDto.getUser()));
            userId = userEntity.getUserId();
        }
        OrderEntity orderEntity = orderRepository.save(toOrder(userId));
        CartsEntity cartsEntity = cartRepository.save(toCart(orderEntity.getOrderId()));
        List<OrderDto.Order> orders = orderDto.getOrderList();

        for (OrderDto.Order order : orders) {
            cartItemsRepository.save(toCartItem(order, cartsEntity.getCartId()));
            Optional<ProductEntity> product = productRepository.findByProductId(order.getProductId());
            if (product.isPresent()) {
                product.get().setQuantity(product.get().getQuantity() - Integer.parseInt(order.getProductQuantity().toString()));
                commonService.setCommonUpdateEntity(product.get());
                productRepository.save(product.get());
            }
        }
    }

    /**
     * @param pageNo
     * @param pageSize
     * @param sortBy
     * @param sortDirection
     * @param searchValue
     * @return
     */
    @Override
    public PageResponse<OrderDto> getAllByOrder(int pageNo, int pageSize, String sortBy, String sortDirection, String searchValue) {
        Pageable pageable = commonService.setPageable(pageSize, pageNo, sortBy, sortDirection);

        // Get content for page object
//        Page<IOrder> orders = orderService.getAllByOrderId(pageable, searchValue);

        return null;
    }

    /**
     * @param orderId
     * @return
     */
    @Override
    public OrderDto getAllByOrderId(Long orderId) {
        return null;
    }

    /**
     * @param userId
     * @return
     */
    @Override
    public List<OrderDto> getAllByUserId(Long userId) {
        return List.of();
    }

    /**
     * @param cartId
     * @param cartStatus
     * @return
     */
    @Override
    public boolean update(Long cartId, String cartStatus) {
        Optional<CartsEntity> cartsEntity = cartRepository.findById(cartId);
        if (cartsEntity.isPresent()) {
            CartsEntity cartEntity = cartsEntity.get();
            cartEntity.setStatus(cartStatus);
            commonService.setCommonUpdateEntity(cartEntity);
            cartRepository.save(cartEntity);
            return true;
        }
        return false;
    }

    /**
     * @return
     */
    @Override
    public List<ICart> getAll() {
        return List.of();
    }

    private UserEntity toUser(OrderDto.Customer user) {
        UserEntity entity = new UserEntity();
        entity.setRole("1");
        entity.setFullName(user.getLastName() + ' ' + user.getFirstName());
        entity.setEmail(user.getEmailAddress());
        entity.setPhone(user.getPhoneNumber());
        entity.setLocale(user.getCompany());
        entity.setCompany(user.getCompany());
        entity.setAddress(user.getAddress() + "-" + user.getCompany() + "-" + user.getPostalCode() + "-" + user.getStateDivision() + "-" + user.getCountry());

        commonService.setCommonCreatedEntity(entity);
        return entity;
    }

    private OrderEntity toOrder(Long userId) {
        OrderEntity entity = new OrderEntity();
        entity.setUserId(userId);
        commonService.setCommonCreatedEntity(entity);
        return entity;
    }

    private CartsEntity toCart(Long orderId) {
        CartsEntity entity = new CartsEntity();
        entity.setCartNumber(String.valueOf((new Date()).getTime()));
        entity.setOrderId(orderId);
        entity.setStatus("1");
        commonService.setCommonCreatedEntity(entity);
        return entity;
    }

    private CartItemsEntity toCartItem(OrderDto.Order order, Long cartId) {
        CartItemsEntity entity = new CartItemsEntity();
        entity.setCartId(cartId);
        entity.setProductId(order.getProductId());
        entity.setPrice(order.getProductPrice());
        entity.setQuantity(order.getProductQuantity());
        commonService.setCommonCreatedEntity(entity);
        return entity;
    }
}
