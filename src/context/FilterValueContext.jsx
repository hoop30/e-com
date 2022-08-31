import React, { createContext, useState } from 'react'

export const FilterValueContext = createContext()

const FilterValueContextProvider = (props) => {

    const [valueFilter, setValueFilter] = useState('')
    
    function handleSetValueFilter(e) {
        setValueFilter(e.target.value.toLowerCase())
    }

    return (
        <FilterValueContext.Provider value={{ valueFilter, handleSetValueFilter }}>
            {props.children}
        </FilterValueContext.Provider>
    )
}

export default FilterValueContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { FilterContext } from './    /FilterContext'

    const {filter, setFilter} = useContext(FilterContext)

    {Filter}
*/

// For parents
/*
import FilterContextProvider from './    /FilterContext'

    <FilterContextProvider>
        Children here
    </FilterContextProvider>
*/