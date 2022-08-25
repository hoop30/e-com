import React from 'react'
import { Modal } from './Modal'
import { useProductsFilter } from '../../../hooks/useProductsFilter'
import { ContentProductFilter } from './ContentProductFilter'
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
            send()
        } else {
            toggle()
        }
    }

    function send() {
        console.log('send form')
    }

    return (
        <React.Fragment>
            <ContentProductFilter isShowing={isShowing} />
            <button className='productsFilter-btn' onClick={toggleSend}>
                {btnContent}
            </button>
        </React.Fragment>
    )
}

