import { useBookingContext } from '../../contexts/BookingContext'
import { useRentedCarsContext } from '../../contexts/RentedCarsContext'
import { useAuthContext } from '../../contexts/AuthContext'
import CarCard from '../../components/CarCard'
import '../../styles/ProfilePages.css'

function CurrentBooking() {
    const { getUserBookings } = useBookingContext()
    const { cars } = useRentedCarsContext()
    const { user } = useAuthContext()

    // Get user's current bookings only (end date is in the future)
    const currentBookings = getUserBookings().filter(b =>
        new Date(b.endDate) > new Date()
    )

    const bookingsWithCarInfo = currentBookings.map(booking => {
        const car = cars.find(c => c.id === booking.carId)
        return { ...booking, car }
    })

    return (
        <div className="current-booking">
            <h2>Your Current Booking</h2>
            {bookingsWithCarInfo.length === 0 ? (
                <p>You have no active bookings.</p>
            ) : (
                bookingsWithCarInfo.map(booking => (
                    <div key={booking.bookingId} className="current-booking-item">
                        <CarCard car={booking.car} />
                        <p>
                            From: {new Date(booking.startDate).toLocaleDateString()} — To:{" "}
                            {new Date(booking.endDate).toLocaleDateString()}
                        </p>
                        <p>Total Price: ${booking.totalPrice}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default CurrentBooking
