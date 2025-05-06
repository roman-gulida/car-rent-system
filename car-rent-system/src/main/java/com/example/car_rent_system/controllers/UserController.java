package com.example.car_rent_system.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class UserController {
    @GetMapping("/user/profile")
    public String userProfile(Model model) {
        model.addAttribute("user", Map.of("name", "Alice Smith", "email", "alice@example.com"));
        return "profile";
    }
}
