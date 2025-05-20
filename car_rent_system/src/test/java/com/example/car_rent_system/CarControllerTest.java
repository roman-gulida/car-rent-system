package com.example.car_rent_system;

import com.example.car_rent_system.controller.CarController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
public class CarControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnRentedCarsString() throws Exception {
        mockMvc.perform(get("/api/cars/rented"))
                .andExpect(status().isOk())
                .andExpect(content().string("List of rented cars"));
    }
}
