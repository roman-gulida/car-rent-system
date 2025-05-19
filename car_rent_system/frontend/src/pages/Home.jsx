import HomeBanner from '../components/HomeBanner'
import Sort from '../components/Sort'
import Filter from '../components/Filter'
import CarCard from '../components/CarCard'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Home() {
    const testCars = [
        {id: 1,  brand: "bmw", model: "m5", releaseDate: "2022", pricePerDay: 10, 
            bookings: [ {startDate: new Date("2025-04-10T10:00"), endDate: new Date("2026-04-15T12:00")}]
        },
        {id: 2,  brand: "tesla", model: "model3", releaseDate: "2018", pricePerDay: 100, 
            bookings: [ {startDate: new Date("2025-04-13T10:00"), endDate: new Date("2025-04-17T12:00")}]
        },
        {id: 3,  brand: "tesla", model: "cyberTruck", releaseDate: "2020", pricePerDay: 20, bookings: []},
    ]

    const [cars] = useState(testCars)
    const [availableCars, setAvailableCars] = useState(testCars)
    const [carsFiltered, setCarsFiltered] = useState(testCars)

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [uniqueBrands, setUniqueBrands] = useState([])
    const [sortValue, setSortValue] = useState("noSort");
    const [hasPriceFilter, setPriceFilter] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [hasBrandFilter, setBrandFilter] = useState(false);
    const [brand, setBrand] = useState("noBrandFilter");

    useEffect(() => {
        let result = [...availableCars];
    
        // filtering
        if (hasPriceFilter) {
            result = result.filter(car => car.pricePerDay >= minPrice && car.pricePerDay <= maxPrice);
        }
    
        if (hasBrandFilter && brand !== "noBrandFilter") {
            result = result.filter(car => car.brand === brand);
        }
    
        // sorting
        if (sortValue === 'priceLowToHigh') {
            result.sort((a, b) => a.pricePerDay - b.pricePerDay);
        } else if (sortValue === 'priceHighToLow') {
            result.sort((a, b) => b.pricePerDay - a.pricePerDay);
        } else if (sortValue === 'newest') {
            result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortValue === 'oldest') {
            result.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        }
    
        setCarsFiltered(result);
    }, [
        availableCars,
        sortValue,
        hasPriceFilter,
        minPrice,
        maxPrice,
        hasBrandFilter,
        brand
    ]);

    useEffect( () => {
        const uniqueBrands = [...new Set(availableCars.map(car => car.brand))]
        setUniqueBrands(uniqueBrands)
    }, [availableCars])
    
    const handleSearch = e => {
        e.preventDefault()
        if (!startDate || !endDate) {
            alert("Please select both start and end date for search")
            return
        }

        const availableCars = cars.filter(car => {
            return car.bookings.every(booking => {
                return ( 
                    endDate <= booking.startDate || startDate >= booking.endDate
                )
            })
        })

        setAvailableCars(availableCars)
        setCarsFiltered(availableCars)
    }
        
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <div className="date-pickers">
                    <DatePicker
                        selected={startDate}
                        onChange={setStartDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="Pp"
                        placeholderText="Pick start date"
                        className="datepicker"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={setEndDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="Pp"
                        placeholderText="Pick end date"
                        className="datepicker"
                        minDate={startDate}
                    />
                </div>
                <div className="search-buttons">
                    <button type="submit" className="search-button">Search</button>
                    <button type="button" className="clear-button"
                      onClick={() => { 
                        setStartDate(null)
                        setEndDate(null)
                        setAvailableCars(cars)
                      }
                    }>Clear</button>
                </div>
            </form>

            <HomeBanner/>

            <Sort sortValue={sortValue} setSortValue={setSortValue} />

            <Filter
                availableCars={availableCars}
                uniqueBrands={uniqueBrands}
                hasPriceFilter={hasPriceFilter}
                setPriceFilter={setPriceFilter}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                hasBrandFilter={hasBrandFilter}
                setBrandFilter={setBrandFilter}
                brand={brand}
                setBrand={setBrand}
            />

            <div className="cars-grid">
                {carsFiltered.map(car => (
                    <CarCard car={car} key={car.id} />
                ))}
            </div>
        </div>
    )
}

export default Home