import React from 'react'
import { Link } from "react-router-dom";


export function HeaderMenuSubCategoryList({ categorys, subList, showProducts, show, onresetSubList }) {
    
    let subCategoryLi = []

    // re-open menu reset position
    if (subList !== null) {
        if (subList !== categorys[categorys.length - 1].children && (!showProducts || show === false)) {
            onresetSubList()
        }
    }

    for (const subCategory in subList) {
        const subCategoryName = subList[subCategory].name

        const newSubCategory = <li key={subCategory}>
            <Link to="/ProductsSubList">{subCategoryName}</Link>
        </li>

        subCategoryLi.push(newSubCategory)
    }


    return subCategoryLi
}
