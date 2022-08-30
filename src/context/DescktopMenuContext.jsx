import React, { createContext, useState } from 'react'

export const DescktopMenuContext = createContext()

const DescktopMenuContextProvider = (props) => {

    const [descktopMenu, setDescktopMenu] = useState('menu hidden')
    
    function setMenu() {
        setDescktopMenu('menu')
    }

    function unSetMenu() {
        setDescktopMenu('menu hidden')
    }

    function toggle() {
        descktopMenu === 'menu' ? unSetMenu() : setMenu()
    }

    return (
        <DescktopMenuContext.Provider value={{descktopMenu, setMenu, unSetMenu, toggle}}>
            {props.children}
        </DescktopMenuContext.Provider>
    )
}

export default DescktopMenuContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { MenuHiddenContext } from './    /DescktopMenuContext'

    const {MenuHidden} = useContext(DescktopMenuContext)

    {MenuHidden}
*/

// For parents
/*
import DescktopMenuContextProvider from './    /DescktopMenuContext'

    <DescktopMenuContextProvider>
        Children here
    </DescktopMenuContextProvider>
*/