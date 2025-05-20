package com.example.car_rent_system;

import com.example.car_rent_system.model.Car;
import com.example.car_rent_system.repository.CarRepository;
import com.example.car_rent_system.service.CarService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class CarServiceTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarService carService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
void testGetAvailableCars() {
    Car car = new Car();
    car.setId(1L);
    car.setBrand("Toyota");
    car.setModel("Corolla");
    car.setAvailable(true);

    when(carRepository.findByAvailableTrue()).thenReturn(List.of(car));

    List<Car> cars = carService.getAvailableCars();
    assertEquals(1, cars.size());
    assertEquals("Toyota", cars.get(0).getBrand());
}

}
