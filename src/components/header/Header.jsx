import React from 'react'
import { MenuBtn } from "./MenuBtn";
import { LogoFuture } from "./LogoFuture";
import { SearchBar } from "./SearchBar";
import { MenuRight } from "./MenuRight";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {

    return (
        <header>
            <div className='nav-bar'>

                <div className='top'>
                    <div className='top-nav'>

                        <div className='left'>
                            <MenuBtn />
                            <LogoFuture />
                        </div>

                        <div className='searchbar'>
                            <SearchBar />
                        </div>

                        <div className='right'>
                            <MenuRight />
                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <div className="headerMenu">
                        <HeaderMenu />
                    </div>
                </div>

            </div>
        </header>
    )
}
