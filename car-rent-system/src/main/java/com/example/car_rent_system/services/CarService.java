package com.example.car_rent_system.services;

import com.example.car_rent_system.domain.Car;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    public Car getMockCar() {
        return new Car("Toyota", "Corolla");
    }
}
