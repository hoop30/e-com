import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom";

export function HeaderMenuCategoryList({categorys, onsetSublist}) {
    
    let licategory = []
    
    for (const key in categorys) {
        
        let liclass = ""
        key === 0 ? liclass = "active" : liclass = ""
        const logo = categorys[key].assets[0].url
        const cat = categorys[key].name

        const newCategory = <li className={liclass} key={key}>
            <Link to="/ProductsList" onMouseEnter={onsetSublist} name={key}>
                <div>
                    <img src={logo} alt="" width="30px" height="30px" />
                    <p>{cat}</p>
                </div>
                <IoIosArrowForward />
            </Link>
        </li>

        licategory.unshift(newCategory)

        
    }
  
    return licategory
}
