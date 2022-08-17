import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { ScrollListener } from '../../../utils/ScrollListener'

export function SearchBar() {
    
    const [search, setSearch] = useState('search')

    ScrollListener(setSearch, '', 'search searchSticky')

    return (
        <form className={search}>
            <input className="searchForm" type="search" aria-label="Search" placeholder="Rechercher" />
            <button className='searchBtn'>
                <IoSearchOutline size="3em" color='grey' id='searchBtn' />
            </button>
        </form>
    )
}