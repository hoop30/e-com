import React, { useState, useEffect } from 'react'
import { Breadcrumb } from '../../layout/Breadcrumb'
import { ProductLayout } from './components/ProductLayout'
import { useLocation } from 'react-router-dom'
import { FetchProducts } from '../../lib/FetchProducts'


export function Product() {

    const newLocation = useLocation()
    const loc = newLocation.search.substring(9)
    const location = loc.replace('%20', ' ')
    
    const [products, setProducts] = useState()

    useEffect(() => {
        FetchProducts(setProducts)
    }, [])

    if (location !== undefined && products !== undefined) {
        
        return (
            <div className='products-page'>
                <div className="product-page-box">
                    <Breadcrumb location={location} products={products} />
                    <ProductLayout location={location} products={products} />
                </div>
            </div>
        )     
    } else {
        
        return (
            <div className='loading-product'>
            </div>
        )
    }
}
