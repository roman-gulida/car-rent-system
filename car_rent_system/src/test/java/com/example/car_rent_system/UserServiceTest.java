package com.example.car_rent_system;

import com.example.car_rent_system.model.User;
import com.example.car_rent_system.repository.UserRepository;
import com.example.car_rent_system.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindByEmail() {
        User user = new User();
        user.setId(1L);
        user.setEmail("test@example.com");

        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(user));

        Optional<User> result = userService.findByEmail("test@example.com");
        assertEquals("test@example.com", result.get().getEmail());
    }

    @Test
    void testSaveUser() {
        User user = new User();
        user.setEmail("new@example.com");

        when(userRepository.save(user)).thenReturn(user);

        User saved = userService.save(user);
        assertEquals("new@example.com", saved.getEmail());
    }
}
