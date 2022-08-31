import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { NormLink } from '../utils/NormLink'

export function SearchResult({ searchObject, research, onclick }) {
    let result = []

    if (research !== undefined) {
        if (research.length > 0) {

            for (const cat in searchObject) {
                if (cat.toLowerCase().includes(research)) {
                    
                    const link = NormLink('CategorysList', cat)
                    const newCat = <li key={cat} onClick={onclick}>
                            <Link to={link}>
                                {cat}
                            </Link>
                        </li>
                    result.push(newCat)
                }

                for (const sub in searchObject[cat]) {
                    if (sub.toLowerCase().includes(research)) {

                        const link = NormLink('ProductsList', sub)
                        const newSub = <li key={sub} onClick={onclick}>
                            <Link to={link}>
                                {cat} <IoIosArrowForward/> {sub}
                            </Link>
                        </li>
                        result.push(newSub)
                    }

                    for (const product of searchObject[cat][sub]) {
                        if (product.toLowerCase().includes(research)) {

                            const link = NormLink('Product', product)
                            const newProd = <li key={product} onClick={onclick}>
                                <Link to={link}>
                                    {cat} <IoIosArrowForward/> {sub} <IoIosArrowForward/> {product}
                                </Link>
                            </li>
                            result.push(newProd)
                        }
                    }
                }
            }
        }
    }
    
    if (result.length > 0) {
        return (
            <ul className='search-result'>
                {result}
            </ul>
            )
    }
}
