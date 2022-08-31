import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { ScrollListener } from '../../../utils/ScrollListener'
import { SearchObjetct } from "../../../utils/SearchObjetct"
import { SearchResult } from '../../../utils/SearchResult'


export function SearchBar() {
    
    const [search, setSearch] = useState('searchbar')
    const [research, setResearch] = useState('')
    const [value, setValue] = useState('')

    ScrollListener(setSearch, 'searchbar', 'searchbar search-sticky')
    
    const searchObject = SearchObjetct()
    
    function resetSearch() {
        setValue('')
        setResearch('')
    }
    
    function handleInput(e) {
        setResearch(e.target.value.toLowerCase())
    }
    function handleValue(e) {
        setValue(e.target.value)
    }
    
    return (
        <div className={search}>
            <form className='search'>
                <input 
                    className="search-form" 
                    type="search" 
                    aria-label="Search" 
                    placeholder="Rechercher" 
                    onKeyUp={handleInput} 
                    onChange={handleValue} 
                    value={value}
                />
                <button className='search-btn'>
                    <IoSearchOutline size="3em" color='grey' id='searchBtn' />
                </button>
                <SearchResult searchObject={searchObject} research={research} onclick={resetSearch}/>
            </form>
        </div>
    )
}