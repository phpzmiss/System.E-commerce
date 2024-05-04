package com.ecommerce.backendNijan.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_users")
@Entity
@Data
public class UserEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "slug")
    private String slug;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "role", length = 3)
    private String role;

    @Column(name = "username")
    private String username;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "locale")
    private String locale;

    @Column(name = "last_login")
    private String lastLogin;

    @Column(name = "email_validated")
    private String emailValidated;

    @Column(name = "phone_validated")
    private String phoneValidated;

    @Column(name = "bio")
    private String bio;

    @Column(name = "company")
    private String company;

}
