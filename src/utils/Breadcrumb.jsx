import React from 'react'
import { ReturnBtn } from './ReturnBtn'

export function Breadcrumb({location, categorys}) {
    
    const loc = location.replace('%20', ' ')
    let category = ''

    if (categorys !== undefined) {
        for (const key in categorys) {
            const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            if (normCategory === loc) {
                category = categorys[key].name
            } else {
                //console.log(categorys[key].children)
                for (const childKey in categorys[key].children) {
                    const child = categorys[key].children[childKey]
                    const normChild = child.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    
                    if (normChild === loc) {
                        category = child.name
                    }
                }
            }
        }
    }

    return (
        <div className='pl-breadcrumb'>
            <ReturnBtn />
            <div className="location">
                {category}
            </div>
        </div>
    )
}
