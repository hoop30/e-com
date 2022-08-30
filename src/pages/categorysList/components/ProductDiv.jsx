import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Loading } from '../../../layout/Loading'
import { Link } from 'react-router-dom'

export function ProductDiv({ subProduct, number }) {

    if (subProduct.length !== 0) {
        if (subProduct[number] !== undefined) {
            const image = subProduct[number].image.url
            const name = subProduct[number].name
            const price = subProduct[number].price.raw
            const normName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            const link = `/Product?product=${normName}`

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
