import React from 'react'

export function PLCategoryBox(name, photo) {
    
    return (
        <div className="pl-box" key={name}>
            <img src={photo} alt="" width='50px' height='50px'/>
            <h3>{name}</h3>
        </div>
    )
}
