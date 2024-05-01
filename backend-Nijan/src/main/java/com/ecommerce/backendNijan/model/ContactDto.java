package com.ecommerce.backendNijan.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDto {

    private Long contactId;

    private String contactName;

    private String contactPhone;

    private String contactEmail;

    private String contactMessage;

    private String contactSubject;
}
