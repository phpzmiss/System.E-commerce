package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.model.ContactDto;
import com.ecommerce.backendNijan.response.PageResponse;

import java.util.List;

public interface ContactService {

    ContactDto getContactById(Long contactId);

    void insertContact(ContactDto contact);

    PageResponse<ContactDto> getAllContacts(int pageNo, int pageSize, String sortDirection, String sortBy);
}
