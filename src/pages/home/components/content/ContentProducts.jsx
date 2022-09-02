import React, { useState, useEffect } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { FormatPrice } from '../../../../utils/FormatPrice'
import { FetchProducts } from '../../../../lib/FetchProducts'
import { Loading } from '../../../../layout/Loading'
import { Link } from 'react-router-dom'
import { NormLink } from '../../../../utils/NormLink'
import { FetchAddToCart } from '../../../../lib/FetchAddToCart'


export function ContentProducts({ number }) {
    const [products, setProducts] = useState()

    useEffect(() => {
        FetchProducts(setProducts);
    }, []);

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

    if (products !== undefined) {
        const name = products[number].name
        const image = products[number].image.url
        const price = products[number].price.raw
        const link = NormLink('Product', name)
        const id = products[number].id

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
                        <button id={id} onClick={add} className='action-cart home-page'>
                            <MdOutlineAddShoppingCart size="2em" />
                        </button>
                    </div>
                </div>
            </div>
        ) 

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
