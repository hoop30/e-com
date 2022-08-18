import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'



export function SubCategoryList({ categorys, subList, onresetSubList }) {
    
    const {MenuHidden} = useContext(MenuHiddenContext)
    let subCategoryLi = []

    // re-open menu reset position
    if (subList !== null && MenuHidden !== 'menu') {
        if (subList !== categorys[categorys.length - 1].children) {
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
