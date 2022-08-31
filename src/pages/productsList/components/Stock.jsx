import React from 'react'

export function Stocks({ stock }) {

    let instock = ''
    
    stock > "0" ?
        instock = <span className='span-stock green'>EN STOCK</span>
        : instock = <span className='span-stock grey-dark'>RUPTURE</span>

    return (
        <div className='stock'>
            <p className='span-dispo'><span>DISPO</span> WEB</p>
            {instock}
        </div>
    )
}