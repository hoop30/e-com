import React, { createContext, useState } from 'react'

export const LocationContext = createContext()

const LocationContextProvider = (props) => {
    
    const [location, setLocation] = useState(null)

    function setLocationContext(e) {
        if (e.target.name !== undefined) {
            setLocation(e.target.name)
        } else {
            if (e.target.parentElement.name !== undefined) {
                setLocation(e.target.parentElement.name)
            } else {
                setLocation(e.target.parentElement.parentElement.name)
            }
        }
    }

    function setLocationlocalStorage() {
        setLocation(localStorage.getItem('location'))
    }
    return (
        <LocationContext.Provider value={{ location, setLocationContext, setLocationlocalStorage }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { LocationContext } from './    /LocationContext'

    const {Location, setLocationContext} = useContext(LocationContext)

    {Location}
*/

// For parents
/*
import LocationContextProvider from './    /LocationContext'

    <LocationContextProvider>
        Children here
    </LocationContextProvider>
*/