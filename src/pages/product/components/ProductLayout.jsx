import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { IoFlashOutline } from 'react-icons/io5'

export function ProductLayout({ location, products }) {

    let currentProduct = ''
    products.forEach(product => {
        if (product.name === location) {
            currentProduct = product
        }
    })

    if (currentProduct !== '') {
        const name = currentProduct.name
        const price = currentProduct.price.raw
        const image = currentProduct.image.url
        const stock = currentProduct.inventory.available
        const description = currentProduct.description
        const preDescription = description.split('<p>')
        let desc = []
        let enStock = ''
        
        preDescription.forEach(element => {
            const preDescriptionSplit = element.split('</p>')
            if (preDescriptionSplit[0] !== '') {
                const newP = <p>{preDescriptionSplit[0]}</p>

                desc.push(newP)
            }
        })
        
        stock > 0 ? 
            enStock = <p className='green'>EN STOCK</p> 
            : enStock = <p className='grey-dark'>RUPTURE</p>

        return (
            <div className='Product-layout-box'>
                <h2>{name}</h2>
                <img src={image} alt="" width="300px" height="300px" />
                <div className="price-stock">
                    <FormatPrice price={price} className="price" />
                    <button className='cart'>
                        <MdOutlineAddShoppingCart size="2em" />
                        <p>AJOUTER AU PANIER</p>
                    </button>
                    <button className='buy'>
                        <IoFlashOutline size="2em" />
                        <p>ACHETER CET ARTICLE</p>
                    </button>
                    <div className="stock">
                        <p>DISPO WEB</p>
                        <div className="center">
                            {enStock}
                        </div>
                    </div>
                </div>
                <div className="desc">
                    {desc}
                </div>
            </div>
        )
    }
}

