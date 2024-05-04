package com.ecommerce.backendNijan.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Register {

    private String firstName;

    private String lastName;

    private String username;

    private String password;

    private String email;

    private String phone;
}
