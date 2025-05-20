package com.example.car_rent_system;

import com.example.car_rent_system.model.Booking;
import com.example.car_rent_system.model.User;
import com.example.car_rent_system.repository.BookingRepository;
import com.example.car_rent_system.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class BookingRepositoryTest {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByUser() {
        User user = new User();
        user.setEmail("bookinguser@example.com");
        user.setPassword("pass");
        user = userRepository.save(user);

        Booking booking = new Booking();
        booking.setUser(user);
        bookingRepository.save(booking);

        List<Booking> result = bookingRepository.findByUser(user);
        assertEquals(1, result.size());
    }
}
