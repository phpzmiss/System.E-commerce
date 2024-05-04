package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.Login;
import com.ecommerce.backendNijan.model.Register;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.JwtResponse;
import com.ecommerce.backendNijan.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * Implement controller of category.
 *
 * @author Mai Ngoc Dinh.
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    /**
     * Login with information from UI.
     *
     * @param login login
     * @return response entity.
     */
    @PostMapping("/sign-in")
    public ApiResponse<JwtResponse> authenticateUser(@Validated @RequestBody Login login) {

        // $2a$10$TQwKVRH05PCXNdVZqByT/OU.QWsdOa1aFMYOvauZRrcvH2Zr9PK1y
        // 12345678
        try {
            return authService.login(login);
        } catch (Exception exception) {
            return ApiResponse.<JwtResponse>builder()
                    .message(exception.getMessage())
                    .code(HttpStatus.FORBIDDEN.value())
                    .build();
        }
    }

    /**
     * Register account.
     *
     * @param register register
     * @return response entity.
     */
    @PostMapping("/sign-up")
    public ApiResponse<?> registerUser(@RequestBody Register register) {
        return authService.registerUser(register);
    }

}
