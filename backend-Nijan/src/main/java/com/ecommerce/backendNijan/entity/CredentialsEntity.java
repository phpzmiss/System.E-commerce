package com.ecommerce.backendNijan.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_credentials")
@Entity
@Data
public class CredentialsEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "provider_id", nullable = false)
    private Long providerId;

    @Column(name = "provider_key")
    private String providerKey;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "hasher")
    private String hasher;

    @Column(name = "password_hash")
    private String passwordHash;

    @Column(name = "password_salt")
    private String passwordSalt;

}
