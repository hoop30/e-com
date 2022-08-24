import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export function PLCategoryBox(name, photo) {
    
    return (
            <div className='pl-subBox' key={name}>
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
