package com.example.car_rent_system.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @GetMapping("/current")
    public ResponseEntity<String> getCurrentBooking() {
        // TODO: Fetch current booking
        return ResponseEntity.ok("Current booking info");
    }

    @GetMapping("/history")
    public ResponseEntity<String> getBookingHistory() {
        // TODO: Fetch booking history
        return ResponseEntity.ok("Booking history");
    }
}
