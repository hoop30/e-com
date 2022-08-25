import React from 'react'
import { Link } from "react-router-dom"


export function SubCategoryList({ subcategorys }) {
    let subCategoryLi = []

    subcategorys.forEach(subcategory => {
        const normCat = subcategory.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const toLink = `/ProductsList?category=${normCat}`
        
        const newSubCategory = <li key={subcategory.name}>
            <Link to={toLink}>{subcategory.name}</Link>
        </li>
    
        subCategoryLi.push(newSubCategory)
    })
    
    return subCategoryLi
}
