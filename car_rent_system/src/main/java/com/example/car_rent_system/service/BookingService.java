package com.example.car_rent_system.service;

import com.example.car_rent_system.model.Booking;
import com.example.car_rent_system.model.User;
import com.example.car_rent_system.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    private final BookingRepository bookingRepo;

    public BookingService(BookingRepository bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public List<Booking> getUserBookings(User user) {
        return bookingRepo.findByUser(user);
    }

    public Booking saveBooking(Booking booking) {
        return bookingRepo.save(booking);
    }
}
