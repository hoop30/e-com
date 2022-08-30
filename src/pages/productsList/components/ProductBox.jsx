import React from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Stocks } from './Stock'
import { Link } from 'react-router-dom'

export function ProductBox({ products, location }) {

    let productsList = []
    products.forEach(product => {

        const catProduct = product.categories[0].name
        const normCatProduct = catProduct.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        
        if (normCatProduct === location) {
            
            const image = product.image.url
            const name = product.name
            const stock = product.inventory.available
            const price = product.price.raw
            const link = `/Product?product=${name}`

            const newProduct = <div className='productList-box' key={name}>
                <Link className="image" to={link}>
                    <img src={image} alt="" width="75px" height="75px" />
                </Link>
                <div>
                    <div className="name-stock">
                        <div className='name'>
                            <h4>{name}</h4>
                        </div>
                        <Stocks stock={stock}/>
                    </div>
                    <div className="price">
                        <FormatPrice price={price} />
                        <button>
                            <MdOutlineAddShoppingCart size="2em" />
                        </button>
                    </div>
                </div>
            </div>

            productsList.push(newProduct)
        }
    })
    
    return productsList
}
