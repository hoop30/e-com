import React from 'react'
import { useProductsFilter } from '../../../hooks/useProductsFilter'
import { ProductFilterBox } from './ProductFilterBox'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export function ProductsFilter() {
    const { isShowing, toggle } = useProductsFilter();

    let btnContent = <>
        <IoIosArrowUp size='0.9em' />
        TRIER / FILTRER
        <IoIosArrowUp size='0.9em' />
    </>

    isShowing ?
        btnContent = <>
            <IoIosArrowDown size='0.9em' />
            APPLIQUER
            <IoIosArrowDown size='0.9em' />
        </>
        : btnContent = <>
            <IoIosArrowUp size='0.9em' />
            TRIER / FILTRER
            <IoIosArrowUp size='0.9em' />
        </>

    function toggleSend() {
        if (isShowing) {
            toggle()
        } else {
            toggle()
        }
    }

    return (
        <React.Fragment>
            <ProductFilterBox isShowing={isShowing} toggle={toggle}/>
            <button className='products-filter-btn' onClick={toggleSend}>
                {btnContent}
            </button>
        </React.Fragment>
    )
}

