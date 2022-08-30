import React from 'react'
import logo from '../../assets/img/logo.png'
import gptw from '../../assets/img/gptw.png'

export function FooterLogo() {
    return (
        <React.Fragment>
            <div className='footer-country'>
                <img src={logo} alt="" width="50px" height="50px" />
                <ul>
                    <li>France</li>
                    <li>Belgique</li>
                    <li>Luxembourg</li>
                    <li>Suisse</li>
                    <li>Espagne</li>
                    <li>Italie</li>
                    <li>International (Anglais)</li>
                </ul>
            <div className='footer-country-left'>
                <img src={gptw} alt="" width="67px" height="114px"/>
            </div>
            </div>
        </React.Fragment>
    )
}
