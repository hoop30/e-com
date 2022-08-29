import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export function CategorysBox(name, photo) {

    return (
            <div className='categorys-sub-Box' key={name}>
                <img src={photo} alt="" width='88px' height='88px'/>
                <div>
                    <div>
                    <h3>{name}</h3>
                    </div>
                    <IoIosArrowDown size='5em'/>
                </div>
            </div>
    )
}
