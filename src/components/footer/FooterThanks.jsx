import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';


export function FooterThanks() {
    let location = useLocation()
    const [footerThanksHidden, setFooterThanksHidden ] = useState('footer-thanks')

    if (location.pathname !== '/' && footerThanksHidden === 'footer-thanks') {
        setFooterThanksHidden('footer-thanks hidden')
    } else if (location.pathname === '/' && footerThanksHidden === 'footer-thanks hidden') {
        setFooterThanksHidden('footer-thanks')
    }

    return (
        <div className={footerThanksHidden}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quis repudiandae error reiciendis, sit eum debitis minima quisquam sequi! Exercitationem voluptatem delectus dolorem. Saepe est perspiciatis quasi quas, sit eum.</div>
    )
}
