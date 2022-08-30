import React from 'react'
import { Link } from "react-router-dom"
import { NormLink } from '../../../utils/NormLink'


export function SubCategoryList({ subcategorys, unSetMenu }) {
    let subCategoryLi = []

    subcategorys.forEach(subcategory => {
        const link = NormLink('ProductsList', subcategory.name)
        
        const newSubCategory = <li key={subcategory.name} onClick={unSetMenu}>
            <Link to={link}>{subcategory.name}</Link>
        </li>
    
        subCategoryLi.push(newSubCategory)
    })
    
    return subCategoryLi
}
