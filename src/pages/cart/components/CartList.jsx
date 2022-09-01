import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { FormatPrice } from '../../../utils/FormatPrice'
import { FormOption } from './FormOption'

export function CartList({ cart, remove }) {

    let cartList = []

    if (cart !== undefined) {
        cart.line_items.forEach(product => {
            
            const image = product.image.url
            const name = product.name
            const price = product.price.raw
            const quantity = product.quantity
            const totalProduct = product.line_total.raw
            const id = product.id

            const newCartList = (               
                    <tbody className='cart-product'>
                        <td><div className='img' >
                            <img src={image} alt="" width="40px" height="40px" />
                        </div></td>
                        <td className='name'>{name}</td>
                        <td className='price'><FormatPrice price={price} /></td>
                        <td className='quantity'>
                            <select name="quantity" id="quantity">
                                <FormOption quantity={quantity}/>
                            </select>
                        </td>
                        <td className='total'><FormatPrice price={totalProduct} /></td>
                        <td className='remove' onClick={remove} id={id}>
                            <VscChromeClose size="1.5em" id={id}/>
                        </td>
                    </tbody>
            )

            cartList.push(newCartList)
        });
    } else {
        cartList = []
    }

    return cartList
}
