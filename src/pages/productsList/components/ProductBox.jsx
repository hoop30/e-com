import React, { useContext } from 'react'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Stocks } from './Stock'
import { Link } from 'react-router-dom'
import { NormLink } from '../../../utils/NormLink'
import { FilterValueContext } from '../../../context/FilterValueContext'
import { FilterPriceContext } from '../../../context/FilterPriceContext'
import { FilterCurrentPriceContext } from '../../../context/FilterCurrentPriceContext'
import { FetchAddToCart } from '../../../lib/FetchAddToCart'



export function ProductBox({ products, location, sort }) {

    const { valueFilter } = useContext(FilterValueContext)
    const { ProductSetPrice } = useContext(FilterPriceContext)
    const { FilterCurrentPrice } = useContext(FilterCurrentPriceContext)

    let prices = []
    let productsList = []

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

    products.forEach(product => {

        const catProduct = product.categories[0].name
        const normCatProduct = catProduct.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const image = product.image.url
        const name = product.name
        const stock = product.inventory.available
        const link = NormLink('Product', name)
        const price = product.price.raw
        const id = product.id

        if (normCatProduct === location) {

            if (valueFilter === '' || product.name.toLowerCase().includes(valueFilter)) {

                if (price <= FilterCurrentPrice || FilterCurrentPrice === null) {

                    const newProduct = <div className='productList-box' key={name} price={price}>
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
                                <button id={id}>
                                    <MdOutlineAddShoppingCart size="2em" />
                                </button>
                                <button id={id} onClick={add} className='action-cart productsList-page'>
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

    if (sort !== null) {
        if (sort === 'Nom') {
            productsList.sort((a, b) => (a.key > b.key) - (a.key < b.key))
        } else if (sort === 'price+') {
            productsList.sort((a, b) => a.props.price - b.props.price)
        } else if (sort === 'price-') {
            productsList.sort((a, b) => b.props.price - a.props.price)
        }
    }
    
    ProductSetPrice(prices)
    return productsList
}
