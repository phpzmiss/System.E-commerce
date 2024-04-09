package com.ecommerce.backendNijan.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class FilterProduct {

    private int pageSize;

    private int pageNo;

    private String sortDirection;

    private String sortBy;

    private String searchValue;

    private Long categoryId;

    private BigDecimal priceMin;

    private BigDecimal priceMax;
}
