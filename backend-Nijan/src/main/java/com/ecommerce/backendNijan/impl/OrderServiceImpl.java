package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.*;
import com.ecommerce.backendNijan.model.*;
import com.ecommerce.backendNijan.repository.*;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.OrderService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

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
    @Transactional(rollbackFor = Exception.class)
    public void insert(OrderDto orderDto) {
        Long userId = orderDto.getUser().getUserId();
        if (Objects.isNull(userId)) {
            UserEntity userEntity = userRepository.save(toUser(orderDto.getUser()));
            userId = userEntity.getUserId();
        } else {
            UserEntity userEntity = userRepository.findById(userId).orElse(null);
            if (Objects.nonNull(userEntity)) {
                if (Strings.isEmpty(userEntity.getAddress())) {
                    userEntity.setAddress(orderDto.getUser().getAddress()
                            + "-" + orderDto.getUser().getCompany()
                            + "-" + orderDto.getUser().getPostalCode()
                            + "-" + orderDto.getUser().getStateDivision()
                            + "-" + orderDto.getUser().getCountry());
                }
                if (Strings.isEmpty(userEntity.getFullName())) {
                    userEntity.setFullName(orderDto.getUser().getLastName() + ' ' + orderDto.getUser().getFirstName());
                }
                userRepository.save(userEntity);
            }
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
    public PageResponse<?> getAllByOrder(int pageNo, int pageSize, String sortBy, String sortDirection, String searchValue) {
        Pageable pageable = commonService.setPageable(pageSize, pageNo, sortBy, sortDirection);

        // Get content for page object
        Page<CartDto> orders = orderRepository.findAllPageable(pageable);
        // Get content for page object
        List<CartDto> listOrder = orders.getContent().stream()
                .sorted(Comparator.comparing(CartDto::getCreatedDate,
                        Comparator.nullsLast(LocalDateTime::compareTo)))
                .toList();
        Map<Long, List<CartDto>> productMap = listOrder.stream()
                .collect(Collectors.groupingBy(CartDto::getOrderId));

        List<OrderDto> orderDtoList = new ArrayList<>();
        productMap.forEach((key, value) -> {
            OrderDto orderDto = new OrderDto();
            orderDto.setOrderId(key);
            orderDto.setCartNumber(value.get(0).getCartNumber());
            orderDto.setCartId(value.get(0).getCartId());
            orderDto.setCartStatus(value.get(0).getCartStatus());
            orderDto.setCreatedDate(CommonService.convertLocalDateTimeToString(value.get(0).getCreatedDate()));
            OrderDto.Customer user = new OrderDto.Customer();
            user.setAddress(value.get(0).getAddress());
            user.setUserId(value.get(0).getUserId());
            user.setLastName(value.get(0).getFullName());
            BigDecimal totalPrice = BigDecimal.ZERO;
            for (CartDto cart : value) {
                totalPrice = totalPrice.add(cart.getPrice().multiply(BigDecimal.valueOf(cart.getQuantity())));
            }
            orderDto.setTotalPrice(totalPrice);
            orderDto.setUser(user);
            orderDtoList.add(orderDto);
        });

        return PageResponse.builder()
                .result(Collections.singletonList(orderDtoList))
                .pageNo(orders.getNumber())
                .pageSize(orders.getSize())
                .totalElements(orders.getTotalElements())
                .totalPages(orders.getTotalPages())
                .last(orders.isLast())
                .build();
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
