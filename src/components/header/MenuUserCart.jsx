import React from 'react'
import user from "../../assets/img/icones/user.png"
import shoppingCart from "../../assets/img/icones/shopping-cart.png"

export function MenuUserCart() {
    return (
        <React.Fragment>
            <div className="">
                <a href="index.css"><img src={user} alt="user" width="30" height="30" /></a>
            </div>
            <div className="">
                <a href="index.css"><img src={shoppingCart} alt="cart" width="30" height="30" /></a>
            </div>
        </React.Fragment>
    )
}
