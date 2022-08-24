import React, { useState, useEffect } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { FormatPrice } from '../../../../utils/FormatPrice'
import { FetchProducts } from '../../../../utils/FetchProducts'
import { Loading } from '../../../../utils/Loading'



export function ContentProducts({ number }) {
    const [products, setProducts] = useState()

    useEffect(() => {
        FetchProducts(setProducts);
    }, []);

    if (products !== undefined) {
        const name = products[number].name
        const image = products[number].image.url
        const price = products[number].price.raw

        return (
            <div className='productSlide'>
                <div className='productBox'>
                    <a href='index.html' className='productBoxphoto'>
                        <img src={image} alt="" />
                    </a>
                    <a href='index.html' className='productName'>{name}</a>
                    <div className='price'>
                        <FormatPrice className='productPrice' price={price} />
                        <button>
                            <MdOutlineAddShoppingCart size="2em" />
                        </button>
                    </div>
                </div>
            </div>
        ) 

    } else {
        return (
            <div className='productSlide'>
                <div className='productBox'>
                    <Loading />
                </div>
            </div>
        )
    }
}
