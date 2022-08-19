import React, { createContext, useState } from 'react'

export const HomeBackgroundContext = createContext()

const HomeBackgroundContextProvider = (props) => {

    const [HomeBackground, setHomeBackground] = useState('home')

    return (
        <HomeBackgroundContext.Provider value={{HomeBackground}}>
            {props.children}
        </HomeBackgroundContext.Provider>
    )
}

export default HomeBackgroundContextProvider

// Where it's used
/*
import { useContext } from 'react'
import { HomeBackgroundContext } from './    /HomeBackgroundContext'

const {HomeBackground} = useContext(HomeBackgroundContext)

{HomeBackground}
*/

// For parents
/*
import HomeBackgroundContextProvider from './    /HomeBackgroundContext'

    <HomeBackgroundContextProvider>
        Children here
    </HomeBackgroundContextProvider>
*/