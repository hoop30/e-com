import React, { createContext, useState } from 'react'

export const MenuHiddenContext = createContext()

const MenuHiddenContextProvider = (props) => {

    const [MenuHidden, setMenuHidden] = useState('menu hidden')
    
    function setMenu() {
        setMenuHidden('menu')
    }

    function unSetMenu() {
        setMenuHidden('menu hidden')
    }

    function toggle() {
        MenuHidden === 'menu' ? unSetMenu() : setMenu()
    }

    return (
        <MenuHiddenContext.Provider value={{MenuHidden, setMenu, unSetMenu, toggle}}>
            {props.children}
        </MenuHiddenContext.Provider>
    )
}

export default MenuHiddenContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { MenuHiddenContext } from './    /MenuHiddenContext'

    const {MenuHidden} = useContext(MenuHiddenContext)

    {MenuHidden}
*/

// For parents
/*
import MenuHiddenContextProvider from './    /MenuHiddenContext'

    <MenuHiddenContextProvider>
        Children here
    </MenuHiddenContextProvider>
*/