import React from 'react'
import { FiUser } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";

export function MenuRight() {
    return (
        <div className="menuRight">
            <FiUser size="3.5em" color='#fcfcfc'/>
            <RiShoppingCartLine size="3.5em" color='#fcfcfc'/>
        </div>
    )
}
