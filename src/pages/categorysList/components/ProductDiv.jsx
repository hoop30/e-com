import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Loading } from '../../../layout/Loading'
import { Link } from 'react-router-dom'
import { NormLink } from '../../../utils/NormLink'
import { FetchAddToCart } from '../../../lib/FetchAddToCart'


export function ProductDiv({ subProduct, number }) {

    if (subProduct.length !== 0) {
        if (subProduct[number] !== undefined) {
            const image = subProduct[number].image.url
            const name = subProduct[number].name
            const price = subProduct[number].price.raw
            const link = NormLink('Product', name)
            const id = subProduct[number].id

            function add(e) {
                let id
        
                if (e.target.id !== '') {
                    id = e.target.id
                } else if (e.target.parentNode.id !== '') {
                    id = e.target.parentNode.id
                } else {
                    id = e.target.parentNode.parentNode.id
                }
        
                FetchAddToCart(id)
                const blur = setInterval(() => {
                    console.log(e.target);
                    e.target.blur()
                    e.target.parentNode.blur()
                    e.target.parentNode.parentNode.blur()
                    clearInterval(blur)
                }, 1500)
            }

            return (
                <div className='product-slide'>
                    <div className='product-box'>
                        <Link to={link} className='product-box-photo'>
                            <img src={image} alt="" />
                        </Link>
                        <Link to={link} className='product-name'>{name}</Link>
                        <div className='price'>
                            <FormatPrice className='product-price' price={price} />
                            <button id={id}>
                                <MdOutlineAddShoppingCart size="2em" />
                            </button>
                            <button id={id} onClick={add} className='action-cart'>
                                <MdOutlineAddShoppingCart size="2em" />
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className='product-slide'>
                <div className='product-box'>
                    <Loading />
                </div>
            </div>
        )
    }
}
