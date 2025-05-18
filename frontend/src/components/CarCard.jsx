function CarCard({car}) {
    return (
        <div className="car-card" data-testid="car-card">
            <div className="car-info">
                <h3>Car {car.id}</h3>
                {car.image && <img src={URL.createObjectURL(car.image)} alt="Car" />}
                <p>{car.brand}, {car.model}, {car.releaseDate}, {car.pricePerDay}, {car.owerContact}</p>
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
