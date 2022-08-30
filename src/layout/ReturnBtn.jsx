import React from 'react'
import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import { RiHome2Line } from 'react-icons/ri'

export function ReturnBtn() {
    return (
        <div className='breadcrumb-return-btn'>
            <Link to={'/'}>
                <div className="breadcrumb-mobile-btn">
                    <IoIosArrowBack size='0.9em' />
                    Retour
                </div>
                <div className="breadcrumb-desktop-btn">
                    <RiHome2Line size='1.4em'/>
                </div>
            </Link>
        </div>
    )
}
