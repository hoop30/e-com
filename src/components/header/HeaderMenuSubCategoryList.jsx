import React from 'react'

export function HeaderMenuSubCategoryList({liListe}) {

    let subCategoryLi = []
    let i = 0

    for (const subCategory in liListe) {
        const newSubCategory = <li key={i}>
            <a href="index.html">{subCategory}</a>
        </li>

        subCategoryLi[i] = newSubCategory
        i++
    }

    return subCategoryLi
}
