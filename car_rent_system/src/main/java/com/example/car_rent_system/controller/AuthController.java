package com.example.car_rent_system.controller;

import com.example.car_rent_system.dto.LoginRequest;
import com.example.car_rent_system.dto.RegisterRequest;
import com.example.car_rent_system.model.User;
import com.example.car_rent_system.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")  // You can adjust this for production
public class AuthController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(UserService userService) {
        this.userService = userService;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userService.findByEmail(request.email).isPresent()) {
            return ResponseEntity.badRequest().body("Email already in use.");
        }

        User user = new User();
        user.setEmail(request.email);
        user.setName(request.name);
        user.setPassword(passwordEncoder.encode(request.password)); // securely hash password
        user.setRole("user");

        userService.save(user);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> userOpt = userService.findByEmail(request.email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid email or password.");
        }

        User user = userOpt.get();
        if (!passwordEncoder.matches(request.password, user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid email or password.");
        }

        return ResponseEntity.ok(user);  // You can return a custom DTO instead
    }
}
