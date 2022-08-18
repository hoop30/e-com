import React from 'react'
import { MobileMenuBtn } from "../mobile/MobileMenuBtn";
import { LogoFuture } from "./LogoFuture";
import { SearchBar } from "./SearchBar";
import { MenuRight } from "./MenuRight";
import { StickyBtn } from './StickyBtn';

export function TopBar() {
    return (
        <div className='top'>

            <div className='left'>
                <MobileMenuBtn />
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
    )
}
