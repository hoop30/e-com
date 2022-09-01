import React, { useContext } from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Stocks } from './Stock'
import { Link } from 'react-router-dom'
import { NormLink } from '../../../utils/NormLink'
import { FilterValueContext } from '../../../context/FilterValueContext'
import { FilterPriceContext } from '../../../context/FilterPriceContext'
import { FilterCurrentPriceContext } from '../../../context/FilterCurrentPriceContext'


export function ProductBox({ products, location }) {

    const { valueFilter } = useContext(FilterValueContext)
    const { ProductSetPrice } = useContext(FilterPriceContext)
    const { FilterCurrentPrice } = useContext(FilterCurrentPriceContext)

    let prices = []
    let productsList = []


    products.forEach(product => {

        const catProduct = product.categories[0].name
        const normCatProduct = catProduct.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const image = product.image.url
        const name = product.name
        const stock = product.inventory.available
        const link = NormLink('Product', name)
        const price = product.price.raw
        
        if (normCatProduct === location) {

            if (valueFilter === '' || product.name.toLowerCase().includes(valueFilter)) {

                if (price <= FilterCurrentPrice || FilterCurrentPrice === null) {

                    const newProduct = <div className='productList-box' key={name}>
                        <Link className="image center" to={link}>
                            <img src={image} alt="" width="75px" height="75px" />
                        </Link>
                        <div>
                            <div className="name-stock">
                                <Link className='name' to={link}>
                                    <h4>{name}</h4>
                                </Link>
                                <Stocks stock={stock} />
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
            }
            prices.push(price)
        }
    })

    ProductSetPrice(prices)
    return productsList
}
