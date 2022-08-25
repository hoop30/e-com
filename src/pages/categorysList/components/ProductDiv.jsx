import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Loading } from '../../../utils/Loading'

export function ProductDiv({ subProduct, number }) {

    if (subProduct.length !== 0) {
        if (subProduct[number] !== undefined) {
            const image = subProduct[number].image.url
            const name = subProduct[number].name
            const price = subProduct[number].price.raw

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
        }
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
