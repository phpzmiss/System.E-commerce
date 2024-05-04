package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.model.Login;
import com.ecommerce.backendNijan.model.Register;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.JwtResponse;
import lombok.NonNull;

public interface AuthService {

    /**
     * Login with information from UI.
     *
     * @param login login
     * @return jwt.
     */
    ApiResponse<JwtResponse> login(@NonNull Login login);

    /**
     * Login with information from UI.
     *
     * @return response entity.
     */
    public ApiResponse<?> registerUser(Register register);
}
