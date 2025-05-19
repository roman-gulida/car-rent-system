import { useState, useEffect} from 'react'
import '../styles/Home.css'

function Filter({
    availableCars,
    uniqueBrands,
    hasPriceFilter,
    setPriceFilter,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    hasBrandFilter,
    setBrandFilter,
    brand,
    setBrand
}) {
    useEffect( () => {
        const mostExpensivePrice = availableCars.map(car => car.pricePerDay).reduce((max, price) => Math.max(max, price), 0)
        setMaxPrice(mostExpensivePrice)
    }, [availableCars])

    return (
        <div className="filter">
            <p>Filter</p>
            <div className="filter-price">
                <label>
                    <input type="checkbox" checked={hasPriceFilter} onChange={e => setPriceFilter(e.target.checked)}/>  
                    Enable price range filter
                </label>
                <input type="number" value={minPrice} placeholder="Min price" 
                    onChange={e => { if (e.target.value > maxPrice) {
                                        setMaxPrice(e.target.value)
                                    }
                                     setMinPrice(e.target.value)
                    }
                        } disabled={!hasPriceFilter}/>
                <input type="number" value={maxPrice} placeholder="Max price" 
                    onChange={e => { if (e.target.value < minPrice) {
                                        setMinPrice(e.target.value)
                                    }
                                    setMaxPrice(e.target.value) 
                    } 
                } disabled={!hasPriceFilter}/>
            </div>
            <div className="filter-brand">
                <label>
                    <input type="checkbox" checked={hasBrandFilter} onChange={e => setBrandFilter(e.target.checked)}/>
                    Enable brand filter
                        <select disabled={!hasBrandFilter} value={brand} onChange={e => setBrand(e.target.value)}>
                            <option value={"noBrandFilter"}>Select Brand</option>
                            {uniqueBrands.map((brand, index) => <option value={brand} key={index}>{brand}</option>)}
                        </select>
                </label>
            </div>
        </div>
    )
}

export default Filter
