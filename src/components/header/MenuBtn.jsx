import React from 'react'
import { useState } from 'react'

export function MenuBtn() {

    const [menuBtnClass, setMenuBtnClass] = useState(true)
    let btnClass = "menuBtn"
    menuBtnClass ? btnClass = "menuBtn" : btnClass = "menuBtn active"

    function userClick() {
        setMenuBtnClass(!menuBtnClass)
    }

    return (
        <button className={btnClass} type="button" aria-label="Toggle navigation" onClick={userClick}>
            <span className="line l1"></span>
            <span className="line l2"></span>
            <span className="line l3"></span>
            <span className="line l4"></span>
        </button>
    )
}
