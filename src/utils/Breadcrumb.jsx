import React from 'react'
import { ReturnBtn } from './ReturnBtn'
import { BreadcrumbLink } from './BreadcrumbLink'

export function Breadcrumb({location, categorys}) {
    
    let loc = ''
    if (location !== undefined) {
        loc = location.replace('%20', ' ')
    }
    let currentLocation = ''
    let category = ''
    let link = ""

    if (categorys !== undefined) {
        
        for (const key in categorys) {
            const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            if (normCategory === loc) {
                currentLocation = categorys[key].name
                
            } else {
                
                for (const childKey in categorys[key].children) {
                    const child = categorys[key].children[childKey]
                    const normChild = child.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    
                    if (normChild === loc) {
                        category = categorys[key].name
                        const normCat = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        link = `/CategorysList?category=${normCat}`
                        
                        currentLocation = child.name
                    }
                }
            }
        }
    }

    return (
        <div className='pl-breadcrumb'>
            <ReturnBtn />
            <BreadcrumbLink to={link} category={category}/>
            <div className="location">
                {currentLocation}
            </div>
        </div>
    )
}
