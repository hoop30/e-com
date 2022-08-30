import React from 'react'
import { ReturnBtn } from './ReturnBtn'
import { BreadcrumbLink } from './BreadcrumbLink'
import { NormLink } from '../utils/NormLink'


export function Breadcrumb({ location, categorys, products }) {

    let loc = ''
    if (location !== undefined) {
        loc = location.replace('%20', ' ')
    }
    let currentLocation = ''
    let links = []

    if (categorys !== undefined) {

        for (const key in categorys) {
            const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

            // end category
            if (normCategory === loc) {
                currentLocation = categorys[key].name

            } else {

                for (const childKey in categorys[key].children) {
                    const child = categorys[key].children[childKey]
                    const normChild = child.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

                    // end subCategory
                    if (normChild === loc) {
                        const category = categorys[key].name
                        const link = NormLink('CategorysList', category)

                        const newLink = <BreadcrumbLink to={link} category={category} key={category}/>

                        links.push(newLink)
                        currentLocation = child.name
                    }
                }
            }
        }
    }

    if (products !== undefined) {
        currentLocation = location
        products.forEach(product => {

            if (product.name === location) {

                // push category Lynk
                const category = product.categories[1].name
                const link = NormLink('CategorysList', category)

                const newLink = <BreadcrumbLink to={link} category={category} key='category'/>

                links.push(newLink)

                // push subCategory Lynk
                const subCategory = product.categories[0].name
                const sublink = NormLink('ProductsList', subCategory)

                const newSubLink = <BreadcrumbLink to={sublink} category={subCategory} key='subCategory'/>

                links.push(newSubLink)
            }
        })
    }

    return (
        <div className='breadcrumb'>
            <ReturnBtn />
            {links}
            <div className="breadcrumb-location">
                {currentLocation}
            </div>
        </div>
    )
}
