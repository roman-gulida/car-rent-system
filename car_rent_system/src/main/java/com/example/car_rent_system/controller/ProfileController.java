package com.example.car_rent_system.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @GetMapping("/account")
    public ResponseEntity<String> getAccountInfo() {
        // TODO: Fetch and return user account info
        return ResponseEntity.ok("User account data");
    }
}
