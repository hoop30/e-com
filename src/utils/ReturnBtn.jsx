import React from 'react'
import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'

export function ReturnBtn() {
    return (
        <div className='return-btn'>
            <Link to={'/'} className='return-link'>
                <IoIosArrowBack size='0.9em' />
                Retour
            </Link>
        </div>
    )
}
