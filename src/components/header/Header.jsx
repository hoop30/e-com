import React, { useState } from 'react'
import { MenuBtn } from "./MenuBtn";
import { LogoFuture } from "./LogoFuture";
import { SearchBar } from "./SearchBar";
import { MenuRight } from "./MenuRight";
import { HeaderMenu } from "./HeaderMenu";
import { ScrollListener } from '../../utils/ScrollListener'

export function Header() {

    const [headerStyle, setHeaderStyle] = useState('')

    ScrollListener(setHeaderStyle, '', 'headerSticky')

    return (
        <header className={headerStyle}>
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
