package com.example.car_rent_system.repository;

import com.example.car_rent_system.model.Booking;
import com.example.car_rent_system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUser(User user);
}
