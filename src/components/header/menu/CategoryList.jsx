import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
import { NormLink } from '../../../utils/NormLink'


export function CategoryList({categorys, onSetSubCategorys, unSetMenu}) {

    let licategory = []
    
    for (const key in categorys) {
        
        let liclass = ""
        key === 0 ? liclass = "active" : liclass = ""
        const logo = categorys[key].assets[0].url
        const cat = categorys[key].name
        const link = NormLink('CategorysList', cat)

        const newCategory = <li className={liclass} key={key} name={cat}>
            <Link to={link} onMouseEnter={onSetSubCategorys} name={cat} onClick={unSetMenu}>
                <div>
                    <img src={logo} alt="" width="30px" height="30px" name={cat}/>
                    <p>{cat}</p>
                </div>
                <IoIosArrowForward name={cat}/>
            </Link>
        </li>

        licategory.unshift(newCategory)
    }
  
    return licategory
}
