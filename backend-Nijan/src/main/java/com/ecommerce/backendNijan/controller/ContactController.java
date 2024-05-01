package com.ecommerce.backendNijan.controller;

import com.ecommerce.backendNijan.model.ContactDto;
import com.ecommerce.backendNijan.response.ApiResponse;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.service.ContactService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    /**
     * Get all contact.
     *
     * @param pageNo        pageNo
     * @param pageSize      pageSize
     * @param sortBy        sortBy
     * @param sortDirection sortDirection
     * @return list object.
     */
    @GetMapping(value = "/list")
    public ApiResponse<?> selectAll(
            @RequestParam(value = "page_no", defaultValue = "0") int pageNo,
            @RequestParam(value = "page_size", defaultValue = "10") int pageSize,
            @RequestParam(value = "sort_direction", defaultValue = "asc") String sortDirection,
            @RequestParam(value = "sort_by", defaultValue = "contact_id") String sortBy) {
        try {
            PageResponse<ContactDto> product = contactService.getAllContacts(pageNo, pageSize, sortDirection, sortBy);
            return ApiResponse.builder()
                    .result(product)
                    .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
                    .message(exception.getMessage())
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build();
        }
    }

    /**
     * Register new contact.
     *
     * @param contact contact
     * @return response entity
     */
    @PostMapping(value = "/insert")
    public ApiResponse<?> registerProduct(@RequestBody @NonNull ContactDto contact) {
        try {
            contactService.insertContact(contact);
            return ApiResponse.builder()
                    .code(HttpStatus.OK.value())
                    .message("Thank you for contacting us. We will contact you soon.")
                    .build();
        } catch (Exception exception) {
            return ApiResponse.builder()
                    .message(exception.getMessage())
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build();
        }
    }

}
