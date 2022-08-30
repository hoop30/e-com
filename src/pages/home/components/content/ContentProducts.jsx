import React, { useState, useEffect } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { FormatPrice } from '../../../../utils/FormatPrice'
import { FetchProducts } from '../../../../lib/FetchProducts'
import { Loading } from '../../../../layout/Loading'
import { Link } from 'react-router-dom'
import { NormLink } from '../../../../utils/NormLink'


export function ContentProducts({ number }) {
    const [products, setProducts] = useState()

    useEffect(() => {
        FetchProducts(setProducts);
    }, []);

    if (products !== undefined) {
        const name = products[number].name
        const image = products[number].image.url
        const price = products[number].price.raw
        const link = NormLink('Product', name)

        return (
            <div className='product-slide'>
                <div className='product-box'>
                    <Link to={link} className='product-box-photo'>
                        <img src={image} alt="" />
                    </Link>
                    <Link to={link} className='product-name'>{name}</Link>
                    <div className='price'>
                        <FormatPrice className='product-price' price={price} />
                        <button>
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
