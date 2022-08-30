import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { ScrollListener } from '../../../utils/ScrollListener'

export function SearchBar() {
    
    const [search, setSearch] = useState('search')

    ScrollListener(setSearch, '', 'search search-sticky')

    return (
        <form className={search}>
            <input className="search-form" type="search" aria-label="Search" placeholder="Rechercher" />
            <button className='search-btn'>
                <IoSearchOutline size="3em" color='grey' id='searchBtn' />
            </button>
        </form>
    )
}