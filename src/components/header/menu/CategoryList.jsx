import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { LocationContext } from '../../../context/LocationContext'

export function CategoryList({categorys, onsetSublist}) {

    const {setLocationContext} = useContext(LocationContext)
    let licategory = []
    
    for (const key in categorys) {
        
        let liclass = ""
        key === 0 ? liclass = "active" : liclass = ""
        const logo = categorys[key].assets[0].url
        const cat = categorys[key].name

        const newCategory = <li className={liclass} key={key} name={cat}>
            <Link to={"/ProductsList"} onMouseEnter={onsetSublist} name={cat} onClick={setLocationContext}>
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
