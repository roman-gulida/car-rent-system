package com.example.car_rent_system;

import com.example.car_rent_system.model.Car;
import com.example.car_rent_system.repository.CarRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class CarRepositoryTest {

    @Autowired
    private CarRepository carRepository;

    @Test
    public void testFindByAvailableTrue() {
        // Available car
        Car availableCar = new Car();
        availableCar.setBrand("Honda");
        availableCar.setModel("Civic");
        availableCar.setColor("Blue");
        availableCar.setPricePerDay(45.0);
        availableCar.setAvailable(true);
        carRepository.save(availableCar);

        // Unavailable car
        Car unavailableCar = new Car();
        unavailableCar.setBrand("Ford");
        unavailableCar.setModel("Focus");
        unavailableCar.setColor("Red");
        unavailableCar.setPricePerDay(50.0);
        unavailableCar.setAvailable(false);
        carRepository.save(unavailableCar);

        List<Car> result = carRepository.findByAvailableTrue();
        assertEquals(1, result.size());
        assertEquals("Honda", result.get(0).getBrand());
    }
}
