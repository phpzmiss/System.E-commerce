package com.ecommerce.backendNijan.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Jwt response from validation.
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String password;
    private String email;
    private List<String> roles;

    /**
     * Create constructor.
     */
    public JwtResponse(String accessToken, Long id, String username, String password, String email,
                       List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }
}