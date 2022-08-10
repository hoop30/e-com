import React, { useState } from 'react'
import { MenuBtn } from "./MenuBtn";
import { LogoFuture } from "./LogoFuture";
import { SearchBar } from "./SearchBar";
import { MenuRight } from "./MenuRight";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
    
    const [menuBtnClass, setMenuBtnClass] = useState(true)
    let btnClass = "menuBtn"
    let headerMenuClass = "bottom-nav hidden"
    menuBtnClass ? btnClass = "menuBtn" : btnClass = "menuBtn active"
    menuBtnClass ? headerMenuClass = "bottom-nav hidden" : headerMenuClass = "bottom-nav"

    function userClick() {
        setMenuBtnClass(!menuBtnClass)
    }
    
    return (
        <header>
            <div className='nav-bar'>

                <div className='top-nav'>

                    <div className='left'>
                        <MenuBtn btnClass={btnClass} userClick={userClick}/>
                        <LogoFuture />
                    </div>

                    <div className='searchbar'>
                        <SearchBar />
                    </div>

                    <div className='right'>
                        <MenuRight/>
                    </div>
                    
                </div>

                <div className={headerMenuClass}>
                    <HeaderMenu/>
                </div>

            </div>
        </header>
    )
}
