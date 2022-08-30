import React from 'react'
import { ProductFilterForm } from './ProductFilterForm'

export function ProductFilterBox({isShowing}) {
    let formProductsFilterClass = 'product-filter-box'

    isShowing ? formProductsFilterClass = 'product-filter-box fadein' : formProductsFilterClass = 'product-filter-box fadeout'
    
    return (
        <div className={formProductsFilterClass}>
            <ProductFilterForm/>
            <button>close</button>
        </div>
    )
}
