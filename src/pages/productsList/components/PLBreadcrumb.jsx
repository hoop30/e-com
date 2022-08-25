import React from 'react'
import { ReturnBtn } from '../../../utils/ReturnBtn'

export function PLBreadcrumb({location, categorys}) {

    let category = ''

    if (categorys !== undefined) {
        for (const key in categorys) {
            const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            if (normCategory === location) {
                category = categorys[key].name
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
