import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Loading } from '../../../layout/Loading'

export function ProductDiv({ subProduct, number }) {

    if (subProduct.length !== 0) {
        if (subProduct[number] !== undefined) {
            const image = subProduct[number].image.url
            const name = subProduct[number].name
            const price = subProduct[number].price.raw

            return (
                <div className='product-slide'>
                    <div className='product-box'>
                        <a href='index.html' className='product-box-photo'>
                            <img src={image} alt="" />
                        </a>
                        <a href='index.html' className='product-name'>{name}</a>
                        <div className='price'>
                            <FormatPrice className='product-price' price={price} />
                            <button>
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
