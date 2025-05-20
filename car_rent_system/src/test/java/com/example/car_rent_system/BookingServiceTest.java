package com.example.car_rent_system;

import com.example.car_rent_system.model.Booking;
import com.example.car_rent_system.model.User;
import com.example.car_rent_system.repository.BookingRepository;
import com.example.car_rent_system.service.BookingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class BookingServiceTest {

    @Mock
    private BookingRepository bookingRepository;

    @InjectMocks
    private BookingService bookingService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUserBookings() {
        User user = new User();
        user.setId(1L);

        Booking booking = new Booking();
        booking.setId(1L);
        booking.setUser(user);

        when(bookingRepository.findByUser(user)).thenReturn(List.of(booking));

        List<Booking> result = bookingService.getUserBookings(user);
        assertEquals(1, result.size());
        assertEquals(1L, result.get(0).getUser().getId());
    }

    @Test
    void testSaveBooking() {
        Booking booking = new Booking();
        booking.setId(1L);

        when(bookingRepository.save(booking)).thenReturn(booking);

        Booking saved = bookingService.saveBooking(booking);
        assertEquals(1L, saved.getId());
    }
}
