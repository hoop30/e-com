import React, { useState } from 'react'
import { Loading } from '../../../layout/Loading'
import { ProductBox } from './ProductBox'


export function Products({ location, products }) {
    const [sort, setSort] = useState(null)
    let count = 0
    
    if (products !== undefined) {

        function sortSelect(e) {
            const arg = e.target.value
            if (arg === 'Nom') {
                setSort('Nom')
            } else if (arg === 'price+') {
                setSort('price+')
            } else if (arg === 'price-') {
                setSort('price-')
            } else {
                setSort(null)
            }
        }

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
                        <select name="sort" id="sort" placeholder='Trier par' className='sort-select' onChange={sortSelect}>
                            <option value="" disabled selected hidden>Trier par</option>
                            <option value="Nom">Nom</option>
                            <option value="price+">Prix croissant</option>
                            <option value="price-">Prix décroissant</option>
                        </select>
                    </div>
                </div>
                <ProductBox products={products} location={location} sort={sort}/>
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
