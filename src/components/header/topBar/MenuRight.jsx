import React, { useState } from 'react'
import { FiUser } from "react-icons/fi"
import { RiShoppingCartLine } from "react-icons/ri"
import { ScrollListener } from '../../../utils/ScrollListener'
import { Link } from "react-router-dom";


export function MenuRight() {

    const [menuRightLogo, setMenuRightLogo] = useState('menu-right-logo')

    ScrollListener(setMenuRightLogo, 'menu-right-logo', 'menu-right-logo menu-right-sticky')

    return (
        <div className="menu-right">
            <div className={menuRightLogo}>
                <FiUser size="2.5em" color='#fcfcfc' className='compte' />
                <p>COMPTE</p>
            </div>
            <Link to="/Cart" className={menuRightLogo}>
                <RiShoppingCartLine size="2.5em" color='#fcfcfc' />
                <p>PANIER</p>
            </Link>
        </div>
    )
}
