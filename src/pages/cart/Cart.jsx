import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FetchRetriveCart } from '../../lib/FetchRetriveCart'
import { CartList } from './components/CartList'
import { VscChromeClose } from 'react-icons/vsc'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FetchRemoveToCart } from '../../lib/FetchRemoveToCart'
import { FetchUpdateCart } from '../../lib/FetchUpdateCart'
import { CartBuy } from './components/CartBuy'


export function Cart({ isModalShowing, toggle }) {

    const [cart, setCart] = useState()
    let total = ''
    let newCart

    useEffect(() => {
        FetchRetriveCart(setCart);
    }, [cart]);

    if (cart !== undefined) {
        total = cart.subtotal.raw
    }

    function remove(e) {
        let id

        if (e.target.id !== '') {
            id = e.target.id
        } else if (e.target.parentNode.id !== '') {
            id = e.target.parentNode.id
        } else {
            id = e.target.parentNode.parentNode.id
        }

        FetchRemoveToCart(id)
        FetchRetriveCart(setCart)
    }

    function update(e) {
        FetchUpdateCart(e.target.id, e.target.selectedIndex)
    }

    isModalShowing ?
        newCart = ReactDOM.createPortal(
            <div className="overlay">
                <div className='cart'>
                    <h2>Panier</h2>
                    <table>
                        <thead>
                            <th></th>
                            <th>Produits</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Total</th>
                            <th><FaRegTrashAlt /></th>
                        </thead>
                        <CartList cart={cart} remove={remove} update={update} />
                    </table>
                    <CartBuy total={total} />
                    <button onClick={toggle}>
                        <div className="center">
                            <VscChromeClose size="2.5em" />
                        </div>
                    </button>
                </div>
            </div>, document.body
        )
        : newCart = null

    return newCart
}