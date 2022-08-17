import React, { createContext, useState } from 'react'

export const MenuHiddenContext = createContext()

const MenuHiddenContextProvider = (props) => {

    const Menu = {
        menuclass: 'hidden',
        toggle: true
    }

    const [MenuHidden, setMenuHidden] = useState(Menu)

    function setMenu() {
        setMenuHidden(Menu.menuclass = "")
    }
    function unSetMenu() {
        setMenuHidden(Menu.menuclass = "hidden")
    }
    function toggle() {
        setMenuHidden(!Menu.toggle)
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