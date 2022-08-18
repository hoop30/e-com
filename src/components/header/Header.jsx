import React, { useState, useContext } from 'react'
import { MenuBtn } from "./mobile/MenuBtn";
import { LogoFuture } from "./topBar/LogoFuture";
import { SearchBar } from "./topBar/SearchBar";
import { MenuRight } from "./topBar/MenuRight";
import { HeaderMenu } from "./bottomBar/HeaderMenu";
import { ScrollListener } from '../../utils/ScrollListener'
import { StickyBtn } from './topBar/StickyBtn';
import { FetchMenuList } from './bottomBar/FetchMenuList'
import { MenuHiddenContext } from '../../context/MenuHiddenContext'


export function Header() {
    const { MenuHidden } = useContext(MenuHiddenContext)
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
                            <StickyBtn />
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

                <div className={MenuHidden}>
                    <div>
                        <FetchMenuList />
                    </div>
                </div>
                
            </div>
        </header>
    )
}
