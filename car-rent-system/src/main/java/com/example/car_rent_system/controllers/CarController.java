package com.example.car_rent_system.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class CarController {
    @GetMapping("/car")
    public String viewCar(Model model) {
        model.addAttribute("car", Map.of("make", "Toyota", "model", "Corolla"));
        return "car";
    }
}
