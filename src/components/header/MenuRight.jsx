import React from 'react'
import { FiUser } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";

export function MenuRight() {
    return (
        <div className="menuRight">
            <div className='menuRightLogo'>
                <FiUser size="2.5em" color='#fcfcfc' className='compte' />
                <p>COMPTE</p>
            </div>
            <div className='menuRightLogo'>
                <RiShoppingCartLine size="2.5em" color='#fcfcfc' />
                <p>PANIER</p>
            </div>
        </div>
    )
}
