import { createContext, useState, useContext, useEffect } from 'react'

const RentedCarsContext = createContext() 

export const useRentedCarsContext = () => useContext(RentedCarsContext)

export const RentedCarsProvider = ({children}) => {
    const [cars, setCars] = useState([])

    const addCar = (carData) => {
        setCars(prev => [...prev, carData])
    }

    const removeCar = (id) => {
        setCars(prev => prev.filter(car => car.id !== id))
    }

    const updateCar = (updatedCar) => {
        setCars(prev => prev.map(car => car.id === updateCar.id ? updatedCar : car))
    }

    const value = {cars, addCar, removeCar, updateCar}

    return (
        <RentedCarsContext.Provider value={value}>
            {children}
        </RentedCarsContext.Provider>
    )
}