package com.example.car_rent_system.services;

import com.example.car_rent_system.domain.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public User getMockUser() {
        return new User("Alice Smith", "alice@example.com");
    }
}
