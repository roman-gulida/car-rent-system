package com.example.car_rent_system.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @GetMapping("/current")
    public ResponseEntity<String> getCurrentBooking() {
        return ResponseEntity.ok("Current booking info");
    }

    @GetMapping("/history")
    public ResponseEntity<String> getBookingHistory() {
        return ResponseEntity.ok("Booking history");
    }
}
