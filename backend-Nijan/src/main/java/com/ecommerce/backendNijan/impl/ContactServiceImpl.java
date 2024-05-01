package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.ContactEntity;
import com.ecommerce.backendNijan.model.ContactDto;
import com.ecommerce.backendNijan.model.ICategory;
import com.ecommerce.backendNijan.repository.ContactRepository;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.ContactService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private CommonService commonService;

    /**
     * @param id
     * @return
     */
    @Override
    public ContactDto getContactById(Long contactId) {
        Optional<ContactEntity> contactEntity = contactRepository.findById(contactId);
        if (contactEntity.isPresent()) {
            ContactDto contactDto = new ContactDto();
            BeanUtils.copyProperties(contactEntity.get(), contactDto);
            return contactDto;
        }
        return new ContactDto();
    }

    /**
     * @param contact
     */
    @Override
    public void insertContact(ContactDto contact) {
        ContactEntity contactEntity = new ContactEntity();
        BeanUtils.copyProperties(contact, contactEntity);
        commonService.setCommonCreatedEntity(contactEntity);
        contactRepository.save(contactEntity);
    }

    /**
     * @return
     */
    @Override
    public PageResponse<ContactDto> getAllContacts(int pageNo, int pageSize, String sortDirection, String sortBy) {
        // Create pageable instance
        Pageable pageable = commonService.setPageable(pageSize, pageNo, sortBy, sortDirection);

        Page<ContactEntity> contactEntities = contactRepository.findAllPageable(pageable);

        List<ContactDto> contactList = contactEntities.getContent().stream()
                .map(contact -> {
                    ContactDto contactDto = new ContactDto();
                    BeanUtils.copyProperties(contact, contactDto);
                    return contactDto;
                })
                .toList();

        return PageResponse.<ContactDto>builder()
                .result(contactList)
                .pageNo(contactEntities.getNumber())
                .pageSize(contactEntities.getSize())
                .totalElements(contactEntities.getTotalElements())
                .totalPages(contactEntities.getTotalPages())
                .last(contactEntities.isLast())
                .build();
    }

}
