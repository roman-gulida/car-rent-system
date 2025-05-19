import CarCard from "../../components/CarCard"
import { useAuthContext } from "../../contexts/AuthContext"
import { useRentedCarsContext } from "../../contexts/RentedCarsContext"

function RentedCars() {
    const {cars, removeCar} = useRentedCarsContext()
    const {user} = useAuthContext()
    
    const userCars = cars.filter(car => car.ownerEmail === user?.email)

    return (
        <div className="rented-cars">
            {userCars.length === 0 ? (
                <p>You have no cars listed for rent</p>
            ) : (
                userCars.map(car => (
                    <div key={car.id} className="rented-car-wrapper">
                        <CarCard car={car}/>
                        <button onClick={() => removeCar(car.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default RentedCars