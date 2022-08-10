import React from 'react'
import { MenuBtn } from "./MenuBtn";
import { LogoFuture } from "./LogoFuture";
import { SearchBar } from "./SearchBar";
import { MenuUserCart } from "./MenuUserCart";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
    return (
        <header>
            <div className='nav-bar'>

                <div className='top-nav'>

                    <div className='left'>
                        <MenuBtn />
                        <LogoFuture />
                    </div>

                    <div className='searchbar'>
                        <SearchBar />
                    </div>

                    <div className='right'>
                        <MenuUserCart/>
                    </div>
                    
                </div>

                <div className='bottom-nav'>
                    <div className="" id="navbarSupportedContent">
                        <HeaderMenu/>
                    </div>
                </div>

            </div>
        </header>
    )
}
