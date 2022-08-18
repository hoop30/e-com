import React, { useState } from 'react'
import { MobileFetchMenuList } from './MobileFetchMenuList'

export function MobileMenuBtn() {
    
    const [menuBtnClass, setMenuBtnClass] = useState(true)
    let btnClass = "menuBtn"
    let ProductsMenuClass = "productsMenu hidden"
    menuBtnClass ? btnClass = "menuBtn" : btnClass = "menuBtn active"
    menuBtnClass ? ProductsMenuClass = "productsMenu hidden" : ProductsMenuClass = "productsMenu"

    function userClick() {
        setMenuBtnClass(!menuBtnClass)
    }

    return (
        <React.Fragment>
            <button className="bouton" type="button" aria-label="Toggle navigation" onClick={userClick}>
                <div className={btnClass}>
                    <span className="line l1"></span>
                    <span className="line l2"></span>
                    <span className="line l3"></span>
                    <span className="line l4"></span>
                </div>
                <p>MENU</p>
            </button>
            <MobileFetchMenuList classStyle={ProductsMenuClass}/>
        </React.Fragment>
    )
}