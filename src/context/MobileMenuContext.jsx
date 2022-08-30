import React, { createContext, useState } from 'react'

export const MobileMenuContext = createContext()

const MenuHiddenContextProvider = (props) => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [btnClass, setBtnClass] = useState("menu-btn")
    const [productsMenuClass, setProductsMenuClass] = useState("products-menu hidden")

    function toggle(toggle = true) {
        if (toggle) {
            setMobileMenu(!mobileMenu)
        } else {
            setMobileMenu(false)
        }

        if (!mobileMenu) {
            setBtnClass("menu-btn")
            setProductsMenuClass("products-menu hidden")
        } else {
            setBtnClass("menu-btn active")
            setProductsMenuClass("products-menu")
        }
    }

    return (
        <MobileMenuContext.Provider value={{ mobileMenu, btnClass, productsMenuClass, toggle }}>
            {props.children}
        </MobileMenuContext.Provider>
    )
}

export default MenuHiddenContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { MobileMenuContext } from './    /MenuHiddenContext'

    const {MenuHidden} = useContext(MenuHiddenContext)

    {MenuHidden}
*/

// For parents
/*
import MobileMenuContextProvider from './    /MenuHiddenContext'

    <MenuHiddenContextProvider>
        Children here
    </MenuHiddenContextProvider>
*/