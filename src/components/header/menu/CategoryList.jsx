import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"


export function CategoryList({categorys, onSetSubCategorys}) {

    let licategory = []
    
    for (const key in categorys) {
        
        let liclass = ""
        key === 0 ? liclass = "active" : liclass = ""
        const logo = categorys[key].assets[0].url
        const cat = categorys[key].name
        const normCat = cat.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const toLink = `/CategorysList?category=${normCat}`

        const newCategory = <li className={liclass} key={key} name={cat}>
            <Link to={toLink} onMouseEnter={onSetSubCategorys} name={cat}>
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
