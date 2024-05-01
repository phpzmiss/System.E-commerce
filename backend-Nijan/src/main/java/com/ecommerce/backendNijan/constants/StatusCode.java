package com.ecommerce.backendNijan.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StatusCode {

    INACTIVE("0", "INACTIVE"),

    ACTIVE("1", "ACTIVE");

    private String code;

    private String description;
}
