package com.ecommerce.backendNijan.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_contact")
@Entity
@Data
public class ContactEntity extends BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id", nullable = false)
    private Long contactId;

    @Column(name = "contact_name", nullable = false)
    private String contactName;

    @Column(name = "contact_email", nullable = false)
    private String contactEmail;

    @Column(name = "contact_subject", nullable = false)
    private String contactSubject;

    @Column(name = "contact_phone", nullable = false, length = 10)
    private String contactPhone;

    @Column(name = "contact_message", length = 3000)
    private String contactMessage;

}
