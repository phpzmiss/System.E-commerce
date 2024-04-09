package com.ecommerce.backendNijan.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping
@RestController
public class MainController {

    @GetMapping("/index")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok("Data test");
    }
}
