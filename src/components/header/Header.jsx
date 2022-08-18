import React, { useState, useContext } from 'react'
import { HeaderMenu } from "./bottomBar/HeaderMenu";
import { ScrollListener } from '../../utils/ScrollListener'
import { DesktopFetchMenuList } from './menu/DesktopFetchMenuList'
import { MenuHiddenContext } from '../../context/MenuHiddenContext'
import { TopBar } from './topBar/TopBar'


export function Header() {
    const { MenuHidden } = useContext(MenuHiddenContext)
    const [headerStyle, setHeaderStyle] = useState('nav-bar')

    ScrollListener(setHeaderStyle, 'nav-bar', 'nav-bar headerSticky')

    return (
        <header className={headerStyle}>

                <div className='top-nav'>
                    <TopBar/>
                </div>

                <div className="bottom-nav">                   
                    <HeaderMenu />
                </div>

                <div className={MenuHidden}>       
                    <DesktopFetchMenuList />
                </div>
            
        </header>
    )
}