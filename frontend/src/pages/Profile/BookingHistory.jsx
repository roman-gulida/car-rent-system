import { useBookingContext } from "../../contexts/BookingContext";
import { useRentedCarsContext } from "../../contexts/RentedCarsContext";
import { useAuthContext } from "../../contexts/AuthContext";

function BookingHistory() {
  const { getUserBookings } = useBookingContext();
  const { cars } = useRentedCarsContext();
  const { user } = useAuthContext();

  const userBookings = getUserBookings();

  // Optional: get car details for each booking
  const bookingsWithCarInfo = userBookings.map(booking => {
    const car = cars.find(c => c.id === booking.carId)
    return { ...booking, car };
  });

//   if (!user) return <p>Please log in to see your booking history.</p>

  return (
    <div className="booking-history">
      <h2>Your Booking History</h2>
      {bookingsWithCarInfo.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookingsWithCarInfo.map(booking => (
            <li key={booking.bookingId} className="booking-item">
                {booking.car?.image && <img src={URL.createObjectURL(booking.car.image)} alt="Car" />}
              <h3>
                {booking.car?.brand} {booking.car?.model}
              </h3>
              <p>
                From: {new Date(booking.startDate).toLocaleDateString()} — To:{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </p>
              <p>Total Price: ${booking.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingHistory;
