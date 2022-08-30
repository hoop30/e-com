import React, { useState, useEffect, useContext } from 'react'
import { MobileMenuList } from './MobileMenuList'
import { FetchCategorys } from '../../../lib/FetchCategorys'
import { MobileMenuContext } from '../../../context/MobileMenuContext'

export function MobileMenuBtn() {
    
    const [categorys, setCategorys] = useState()
    const {mobileMenu, btnClass, productsMenuClass, toggle} = useContext(MobileMenuContext)

    useEffect(() => {
        FetchCategorys(setCategorys)
    }, [])

    // close mobile menu on desktop resize
    window.onresize = closeMenu
    function closeMenu() {
        if (window.innerWidth > 1024 && !mobileMenu) {
            toggle(false)
        }
    }
    
    return (
        <React.Fragment>
            <button className="mobile-menu-btn" type="button" aria-label="Toggle navigation" onClick={toggle}>
                <div className={btnClass}>
                    <span className="line l1"></span>
                    <span className="line l2"></span>
                    <span className="line l3"></span>
                    <span className="line l4"></span>
                </div>
                <p>MENU</p>
            </button>
            <MobileMenuList categorys={categorys} classStyle={productsMenuClass} onclick={toggle}/>
        </React.Fragment>
    )
}