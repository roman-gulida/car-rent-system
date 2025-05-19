import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { useRentedCarsContext } from "../contexts/RentedCarsContext";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const { user } = useAuthContext();
  const { cars, setCars } = useRentedCarsContext()

  const [bookings, setBookings] = useState([])

  const bookCar = ({ carId, startDate, endDate }) => {
    if (!user) return

    const car = cars.find(car => car.id === carId);
    if (!car) return

    if (new Date(startDate) >= new Date(endDate)) {
      alert("Invalid date range")
      return
    }

    const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
    const totalPrice = days * car.pricePerDay;

    const booking = {
      bookingId: Date.now(),
      carId,
      userEmail: user.email,
      startDate,
      endDate,
      totalPrice,
    };

    const updatedCars = cars.map(car =>
      car.id === carId ? { ...car, bookings: [...car.bookings, booking] } : car
    );
    setCars(updatedCars);

    setBookings(prev => [...prev, booking]);

    // Update user booked cars (if managed in AuthContext or similar)
    // Alternatively, retrieve bookings for user from the cars
  };

  const getUserBookings = () => {
    return bookings.filter(b => b.userEmail === user?.email);
  };

  return (
    <BookingContext.Provider value={{ bookings, bookCar, getUserBookings }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  return useContext(BookingContext);
}
