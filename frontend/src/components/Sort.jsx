import { useState, useEffect } from 'react'

function Sort({sortValue, setSortValue}) {
    return (
        <div className="sort">
            <p>Sort by: </p>
            <select value={sortValue} onChange={e => setSortValue(e.target.value)}>
                <option value={"noSort"}>Select the sorting</option>
                <option value={"priceLowToHigh"}>Price: Low to High</option>
                <option value={"priceHighToLow"}>Price: High to Low</option>
                <option value={"newest"}>Newest</option>
                <option value={"oldest"}>Oldest</option>
            </select>
        </div>
    )
}

export default Sort
