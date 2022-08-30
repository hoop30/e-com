import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function CategorysSubBox(name, photo) {

    const normName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const link = `/ProductsList?category=${normName}`

    return (
        <div className='categorys-sub-Box' key={name}>
            <Link to={link}>
                <img src={photo} alt="" width='88px' height='88px' />
            </Link>
            <div>
                <Link to={link} className='categorys-sub-Box-name'>
                    <h3>{name}</h3>
                </Link>
                <Link to={link}>
                    <IoIosArrowDown size='5em' />
                </Link>
            </div>
        </div>
    )
}
