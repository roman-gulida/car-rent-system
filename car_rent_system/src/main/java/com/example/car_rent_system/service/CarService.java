package com.example.car_rent_system.service;

import com.example.car_rent_system.model.Car;
import com.example.car_rent_system.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepo;

    public CarService(CarRepository carRepo) {
        this.carRepo = carRepo;
    }

    public List<Car> getAvailableCars() {
        return carRepo.findByAvailableTrue();
    }

    public Car addCar(Car car) {
        return carRepo.save(car);
    }
}
