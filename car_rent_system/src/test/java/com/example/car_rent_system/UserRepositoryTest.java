package com.example.car_rent_system;

import com.example.car_rent_system.model.User;
import com.example.car_rent_system.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByEmail() {
        User user = new User();
        user.setEmail("repo@example.com");
        user.setPassword("password123");

        userRepository.save(user);

        Optional<User> result = userRepository.findByEmail("repo@example.com");
        assertTrue(result.isPresent());
    }
}
