import { render, screen } from '@testing-library/react'
import CarCard from '../components/CarCard'

const car = {id: 1,  brand: "BMW", model: "m5", releaseDate: "2022", pricePerDay: 10, 
                bookings: [ {startDate: new Date("2025-04-10T10:00"), endDate: new Date("2026-04-15T12:00")}]
        }

test('renders car title and price', () => {
  render(<CarCard car={car} />);
  expect(screen.getByText(/BMW/i)).toBeInTheDocument();
  expect(screen.getByText(/2022/i)).toBeInTheDocument();
});
