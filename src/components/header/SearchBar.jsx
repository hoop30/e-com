import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export function SearchBar() {
    return (
        <form role="search">
            <input className="searchForm" type="search" placeholder="Recherche" aria-label="Search" />
            <button className='searchBtn'>
                <IoSearchOutline size="3em" color='grey' id='searchBtn'/>
            </button>
        </form>
    )
}
