import React, { useState } from 'react'
import { FiUser } from "react-icons/fi"
import { RiShoppingCartLine } from "react-icons/ri"
import { ScrollListener } from '../../../utils/ScrollListener'
import { useCart } from '../../../hooks/useCart'
import { Cart } from '../../../pages/cart/Cart'


export function MenuRight() {

    const [menuRightLogo, setMenuRightLogo] = useState('menu-right-logo')
    const {isModalShowing, toggle} = useCart()

    ScrollListener(setMenuRightLogo, 'menu-right-logo', 'menu-right-logo menu-right-sticky')

    return (
        <div className="menu-right">
            <div className={menuRightLogo}>
                <FiUser size="2.5em" color='#fcfcfc' className='compte' />
                <p>COMPTE</p>
            </div>
            <div className={menuRightLogo} onClick={toggle}>
                <RiShoppingCartLine size="2.5em" color='#fcfcfc' onClick={toggle}/>
                <p onClick={toggle}>PANIER</p>
            </div>
            <Cart isModalShowing={isModalShowing} toggle={toggle}/>
        </div>
    )
}
