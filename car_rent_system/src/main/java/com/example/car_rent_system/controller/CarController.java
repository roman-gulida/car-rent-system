package com.example.car_rent_system.controller;

import com.example.car_rent_system.dto.CarDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @PostMapping("/add")
    public ResponseEntity<String> addCar(@RequestBody CarDto carDto) {
        // TODO: Add car logic
        return ResponseEntity.ok("Car added");
    }

    @GetMapping("/rented")
    public ResponseEntity<String> getRentedCars() {
        // TODO: Return rented cars
        return ResponseEntity.ok("List of rented cars");
    }
}
