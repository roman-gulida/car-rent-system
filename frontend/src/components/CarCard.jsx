function CarCard({car}) {
    return (
        <div className="car-card">
            <div className="car-info">
                <h3>Car {car.id}</h3>
                <p>{car.brand}, {car.model}, {car.releaseDate}, {car.pricePerDay}</p>
                <ul>
                  {car.bookings.map((booking, i) => (
                    <li key={i}>
                      From: {new Date(booking.startDate).toLocaleString()} – To: {new Date(booking.endDate).toLocaleString()}
                    </li>
                  ))}
                </ul>
            </div>    
        </div>
    )
}

export default CarCard
