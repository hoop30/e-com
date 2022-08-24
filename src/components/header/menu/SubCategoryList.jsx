import React from 'react'
import { Link } from "react-router-dom"


export function SubCategoryList({ subcategorys }) {
    let subCategoryLi = []

    subcategorys.forEach(subcategory => {
        
        const newSubCategory = <li key={subcategory.name}>
            <Link to="/ProductsSubList">{subcategory.name}</Link>
        </li>
    
        subCategoryLi.push(newSubCategory)
    })
    
    return subCategoryLi
}
