package com.ecommerce.backendNijan.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private Long orderId;

    private String cartNumber;

    private Long cartId;

    private String createdDate;

    private BigDecimal totalPrice;

    private String cartStatus;

    private Customer user;

    private List<Order> orderList;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Customer {

        private Long userId;

        private String firstName;

        private String lastName;

        private String emailAddress;

        private String phoneNumber;

        private String country;

        private String stateDivision;

        private String postalCode;

        private String company;

        private String address;
    }


    /**
     * Class order.
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Order {
        private Long productId;

        private String productName;

        private BigDecimal productPrice;

        @Builder.Default
        private Long productQuantity = 0L;

        private String createAt;
    }
}
