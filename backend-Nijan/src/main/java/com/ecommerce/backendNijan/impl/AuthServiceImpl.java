package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.config.JwtUtils;
import com.ecommerce.backendNijan.entity.CredentialsEntity;
import com.ecommerce.backendNijan.entity.UserEntity;
import com.ecommerce.backendNijan.model.Login;
import com.ecommerce.backendNijan.model.Register;
import com.ecommerce.backendNijan.model.UserModelDto;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.JwtResponse;
import com.ecommerce.backendNijan.service.AuthService;
import com.ecommerce.backendNijan.service.UserService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Collections;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    CommonService commonService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Login with information from UI.
     *
     * @param login login
     * @return jwt.
     */
    @Override
    public ApiResponse<JwtResponse> login(@NonNull Login login) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(login.getUsername(),
                        login.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate jwt
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserModelDto user = userService.getUserModel(authentication);

        return ApiResponse.<JwtResponse>builder()
                .message("Success")
                .result(new JwtResponse(jwt, user.getUserId(), user.getUsername(), user.getPassword(), user.getEmail(),
                        Collections.singletonList(user.getRole().equals("3") ? "ADMIN" : "OTHER")))
                .build();
    }

    /**
     * Login with information from UI.
     *
     * @param register register
     * @return response entity.
     */
    @Override
    public ApiResponse<?> registerUser(Register register) {
        if (userService.existsByUsername(register.getUsername())) {
            return ApiResponse.builder()
                    .code(HttpStatus.BAD_REQUEST.value())
                    .message("Error: Username is already taken!")
                    .build();
        }
        try {
            if (!StringUtils.isEmpty(register.getEmail()) &&
                    !StringUtils.isEmpty(register.getPassword()) &&
                    !StringUtils.isEmpty(register.getUsername())) {

                UserEntity userEntity = userService.insert(toBuildUserEntity(register));
                CredentialsEntity credentialsEntity = userService.insert(toBuildCredentials(register, userEntity.getUserId()));

                return ApiResponse.builder()
                        .code(HttpStatus.OK.value())
                        .message("User registered successfully!")
                        .build();
            }

            return ApiResponse.builder()
                    .code(HttpStatus.NOT_ACCEPTABLE.value())
                    .message("User registered error!")
                    .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message(exception.getMessage())
                    .build();
        }
    }

    private CredentialsEntity toBuildCredentials(Register register, Long userId) {
        CredentialsEntity entity = new CredentialsEntity();
        entity.setUserId(userId);
        entity.setPasswordHash(passwordEncoder.encode(register.getPassword()));
        commonService.setCommonCreatedEntity(entity);
        return entity;
    }

    private UserEntity toBuildUserEntity(Register register) {
        UserEntity entity = new UserEntity();
        entity.setEmail(register.getEmail());
        entity.setUsername(register.getUsername());
        entity.setPhone(register.getPhone());
        entity.setFullName(register.getLastName() + ' ' + register.getFirstName());
        entity.setRole("1");
        commonService.setCommonCreatedEntity(entity);
        return entity;
    }
}
