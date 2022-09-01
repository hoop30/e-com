import React, { createContext, useState } from 'react'

export const FilterCurrentPriceContext = createContext()

const FilterCurrentPriceContextProvider = (props) => {

    const [FilterCurrentPrice, setFilterCurrentPrice] = useState(null)

    function currentPriceChange(newPrice) {
        setFilterCurrentPrice(Number(newPrice))
        //console.log(newPrice);
    }

    return (
        <FilterCurrentPriceContext.Provider value={{FilterCurrentPrice, currentPriceChange}}>
            {props.children}
        </FilterCurrentPriceContext.Provider>
    )
}

export default FilterCurrentPriceContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { FilterCurrentPriceContext } from './    /FilterCurrentPriceContext'

    const {FilterCurrentPrice, currentPriceChange} = useContext(FilterCurrentPriceContext)

    {FilterCurrentPrice}
*/

// For parents
/*
import FilterCurrentPriceContextProvider from './    /FilterCurrentPriceContext'

    <FilterCurrentPriceContextProvider>
        Children here
    </FilterCurrentPriceContextProvider>
*/