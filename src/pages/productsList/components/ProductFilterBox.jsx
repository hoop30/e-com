import React from 'react'
import { ProductFilterForm } from './ProductFilterForm'

export function ProductFilterBox({isShowing}) {
    let formProductsFilterClass = 'productFilterBox'

    isShowing ? formProductsFilterClass = 'productFilterBox fadein' : formProductsFilterClass = 'productFilterBox fadeout'
    
    return (
        <div className={formProductsFilterClass}>
            <ProductFilterForm/>
            <button>close</button>
        </div>
    )
}
