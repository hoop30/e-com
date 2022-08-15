import React, { useState } from 'react'
import { FiUser } from "react-icons/fi"
import { RiShoppingCartLine } from "react-icons/ri"
import { ScrollListener } from '../../utils/ScrollListener'
import { Link } from "react-router-dom";


export function MenuRight() {

    const [menuRightLogo, setMenuRightLogo] = useState('menuRightLogo')

    ScrollListener(setMenuRightLogo, 'menuRightLogo', 'menuRightLogo menuRightSticky')

    return (
        <div className="menuRight">
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
