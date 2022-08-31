import React, { createContext, useState } from 'react'

export const FilterPriceContext = createContext()

const FilterPriceContextProvider = (props) => {

    const [FilterPrice, setFilterPrice] = useState(null)

    function ProductSetPrice(prices) {
        if (FilterPrice === null || FilterPrice[0] !== prices[0] || FilterPrice[FilterPrice.length - 1] !== prices[prices.length - 1]) {
            setFilterPrice(prices)
        }
    }

    return (
        <FilterPriceContext.Provider value={{FilterPrice, ProductSetPrice}}>
            {props.children}
        </FilterPriceContext.Provider>
    )
}

export default FilterPriceContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { FilterPriceContext } from './    /FilterPriceContext'

    const {FilterPrice, ProductSetPrice} = useContext(FilterPriceContext)

    {FilterPrice}
*/

// For parents
/*
import FilterPriceContextProvider from './    /FilterPriceContext'

    <FilterPriceContextProvider>
        Children here
    </FilterPriceContextProvider>
*/