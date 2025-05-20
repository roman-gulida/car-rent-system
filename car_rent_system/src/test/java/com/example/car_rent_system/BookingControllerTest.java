package com.example.car_rent_system;

import com.example.car_rent_system.controller.BookingController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BookingController.class)
@AutoConfigureMockMvc(addFilters = false)
public class BookingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnCurrentBooking() throws Exception {
        mockMvc.perform(get("/api/bookings/current"))
                .andExpect(status().isOk())
                .andExpect(content().string("Current booking info"));
    }

    @Test
    public void shouldReturnBookingHistory() throws Exception {
        mockMvc.perform(get("/api/bookings/history"))
                .andExpect(status().isOk())
                .andExpect(content().string("Booking history"));
    }
}
