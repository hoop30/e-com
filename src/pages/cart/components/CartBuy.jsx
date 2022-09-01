import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'

export function CartBuy({total}) {
    return (
        <div className='cart-buy'>
            <h2>TOTAL TTC</h2>
            <FormatPrice price={total}/>
            <button>PASSER COMMANDE</button>
        </div>
    )
}
