import React, { useState, useContext } from 'react'
import { HeaderMenu } from "./bottomBar/HeaderMenu";
import { ScrollListener } from '../../utils/ScrollListener'
import { DesktopMenuList } from './menu/DesktopMenuList'
import { DescktopMenuContext } from '../../context/DescktopMenuContext'
import { TopBar } from './topBar/TopBar'


export function Header() {
    const { descktopMenu } = useContext(DescktopMenuContext)
    const [headerStyle, setHeaderStyle] = useState('nav-bar')

    ScrollListener(setHeaderStyle, 'nav-bar', 'nav-bar header-sticky')

    return (
        <header className={headerStyle}>

                <div className='top-nav'>
                    <TopBar/>
                </div>

                <div className="bottom-nav">                   
                    <HeaderMenu />
                </div>

                <div className={descktopMenu}>       
                    <DesktopMenuList />
                </div>
            
        </header>
    )
}