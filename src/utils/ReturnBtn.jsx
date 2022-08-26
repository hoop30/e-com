import React from 'react'
import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import { RiHome2Line } from 'react-icons/ri'

export function ReturnBtn() {
    return (
        <div className='return-btn'>
            <Link to={'/'} className='return-link'>
                <div className="mobile-btn">
                    <IoIosArrowBack size='0.9em' />
                    Retour
                </div>
                <div className="desktop-btn">
                    <RiHome2Line size='1.4em'/>
                </div>
            </Link>
        </div>
    )
}
