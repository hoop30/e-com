import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'


export function BreadcrumbLink({ to, category }) {
    
    if (category !== '') {
        return (
            <Link to={to} className='breadcrumbLink'>
                <p>{category}</p>
                <IoIosArrowForward  size='0.8em'/>
            </Link>
        )
    }
}
