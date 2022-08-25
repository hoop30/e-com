import React from 'react'
import { Loading } from '../../../utils/Loading'

export function Products({ location, products }) {
    
    if (products !== undefined) {
        let productsList = []
        
        products.forEach(product => {
            const catProduct = product.categories[0].name
            const normCatProduct = catProduct.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
            if (normCatProduct === location) {
                const image = product.image.url
                const name = product.name
                const stock = product.inventory.available
                const price = product.price.raw
    
                const newProduct = <div className='productBox'>
                    <div className="left">
                        <img src={image} alt="" width="50px" height="50px" />
                        <h4>{name}</h4>
                    </div>
                    <div className="right">
                        <div>{stock}</div>
                        <div className="price">
                            {price}
                            <button>cart</button>
                        </div>
                    </div>
                </div>
    
                productsList.push(newProduct)
            }
        })

        return (
            <div className='products'>
                <div className='title'>
                    <h2>'nbr' articles correspondent :</h2>
                    <select name="sort" id="sort" placeholder='Trier par'>
                        <option value="" disabled selected hidden label='Trier par'></option>
                        <option value="designation">Désignation</option>
                        <option value="price+">Prix croissant</option>
                        <option value="price-">Prix décroissant</option>
                    </select>
                </div>
                {productsList}
            </div>
        )
    } else {
        return (
            <div className='products'>
                <div className='title'>
                    <h2>'nbr' articles correspondent :</h2>
                    <select name="sort" id="sort" placeholder='Trier par'>
                        <option value="" disabled selected hidden label='Trier par'></option>
                        <option value="designation">Désignation</option>
                        <option value="price+">Prix croissant</option>
                        <option value="price-">Prix décroissant</option>
                    </select>
                </div>
                <Loading />
            </div>
        )
    }
}
