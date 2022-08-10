import React from 'react'
import search from "../../assets/img/icones/search.png"

export function SearchBar() {
    return (
        <form role="search">
            <input className="searchForm" type="search" placeholder="Recherche" aria-label="Search" />
            <button className='searchBtn'><img src={search} alt="" width="50" height="50" /></button>
        </form>
    )
}
