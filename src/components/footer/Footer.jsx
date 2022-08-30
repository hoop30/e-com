import React from 'react'
import { FooterThanks } from './FooterThanks'
import { FooterInfo } from './FooterInfo'
import { FooterLogo } from './FooterLogo'

export function Footer() {
    return (
        <footer>
            <div className='footer-layout'>
                <FooterThanks />
                <FooterInfo />
                <FooterLogo />
            </div>
        </footer>
    )
}
