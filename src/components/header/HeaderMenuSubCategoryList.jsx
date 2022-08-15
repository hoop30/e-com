import React from 'react'
import { Link } from "react-router-dom";


export function HeaderMenuSubCategoryList({liListe}) {

    let subCategoryLi = []
    let i = 0

    for (const subCategory in liListe) {
        const newSubCategory = <li key={i}>
            <Link to="/ProductsSubList">{subCategory}</Link>
        </li>

        subCategoryLi[i] = newSubCategory
        i++
    }

    return subCategoryLi
}
