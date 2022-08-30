import React from 'react'
import { ProductFilterForm } from './ProductFilterForm'
import { VscChromeClose } from 'react-icons/vsc'

export function ProductFilterBox({isShowing, toggle}) {
    let formProductsFilterClass = 'product-filter-box'

    isShowing ? formProductsFilterClass = 'product-filter-box fadein' : formProductsFilterClass = 'product-filter-box fadeout'
    
    return (
        <div className={formProductsFilterClass}>
            <ProductFilterForm/>
            <button>
                <div className='center' onClick={toggle}>
                    <VscChromeClose size="2.5em"/>
                </div>
            </button>
        </div>
    )
}
