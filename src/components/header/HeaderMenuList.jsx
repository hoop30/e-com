import React from 'react'
import { useState } from 'react'
import products from "../../data/products.json"
import { HeaderMenuCategoryList } from './HeaderMenuCategoryList'
import { HeaderMenuSubCategoryList } from './HeaderMenuSubCategoryList'

export function HeaderMenuList({showProducts}) {
    
    const [liListe, setLiListe] = useState(products["Informatique"])

    function liListeset(e) {
        setLiListe(products[e.target.name])
    }
    if (!showProducts && liListe !== products["Informatique"]){ 
        setLiListe(products["Informatique"])
    }

    return (
        <React.Fragment>
            <ul className='CategoryList'>
                <HeaderMenuCategoryList liListe={products} liListeset={liListeset}/>
            </ul>
            <ul className='SubCategoryList'>
                <HeaderMenuSubCategoryList liListe={liListe}/>
            </ul>
        </React.Fragment>
    )
}
