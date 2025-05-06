package com.example.car_rent_system.domain;

public class Car {
    private String make;
    private String model;

    // Constructors
    public Car() {}

    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    // Getters & Setters
    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
