import React from 'react'
import { Loading } from '../../../layout/Loading'
import { ProductBox } from './ProductBox'

export function Products({ location, products }) {
    let count = 0
    if (products !== undefined) {
        products.forEach(product => {
            
            const catProduct = product.categories[0].name
            const normCatProduct = catProduct.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
            if (normCatProduct === location) {
                count += 1
            }
        })

        return (
            <div className='products'>
                <div className='title'>
                    <h2>{count} ARTICLES CORRESPONDENT :</h2>
                    <div className="wrap">
                        <select name="sort" id="sort" placeholder='Trier par' className='sort-select'>
                            <option value="" disabled selected hidden>Trier par</option>
                            <option value="designation">Désignation</option>
                            <option value="price+">Prix croissant</option>
                            <option value="price-">Prix décroissant</option>
                        </select>
                    </div>
                </div>
                <ProductBox products={products} location={location}/>
            </div>
        )
    } else {
        return (
            <div className='products'>
                <div className='title'>
                    <h2>{count} ARTICLES CORRESPONDENT :</h2>
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
