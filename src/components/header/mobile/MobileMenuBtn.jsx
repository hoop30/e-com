import React, { useState, useEffect } from 'react'
import { MobileMenuList } from './MobileMenuList'
import { FetchCategorys } from '../../../lib/FetchCategorys'

export function MobileMenuBtn() {
    
    const [categorys, setCategorys] = useState()
    const [menuBtnClass, setMenuBtnClass] = useState(true)
    let btnClass = "menu-btn"
    let ProductsMenuClass = "products-menu hidden"
    
    menuBtnClass ? btnClass = "menu-btn" : btnClass = "menu-btn active"
    menuBtnClass ? ProductsMenuClass = "products-menu hidden" : ProductsMenuClass = "products-menu"

    useEffect(() => {
        FetchCategorys(setCategorys)
    }, [])

    function userClick() {
        setMenuBtnClass(!menuBtnClass)
    }

    // close mobile menu on desktop resize
    window.onresize = closeMenu
    function closeMenu() {
        if (window.innerWidth > 1024 && !menuBtnClass) {
            setMenuBtnClass(true)
        }
    }
    
    return (
        <React.Fragment>
            <button className="mobile-menu-btn" type="button" aria-label="Toggle navigation" onClick={userClick}>
                <div className={btnClass}>
                    <span className="line l1"></span>
                    <span className="line l2"></span>
                    <span className="line l3"></span>
                    <span className="line l4"></span>
                </div>
                <p>MENU</p>
            </button>
            <MobileMenuList categorys={categorys} classStyle={ProductsMenuClass}/>
        </React.Fragment>
    )
}