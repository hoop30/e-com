import React from 'react'
import { RiArrowDropDownLine, RiPercentLine, RiContactsLine, RiQuestionMark } from "react-icons/ri";
import { useContext } from 'react'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'


export function HeaderMenu() {

    const {setMenu, unSetMenu} = useContext(MenuHiddenContext)

    return (
        <ul className='headerMenu'>
            <li onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                <button aria-current="page" href="index.css">
                    TOUS NOS PRODUITS
                    <RiArrowDropDownLine size="2em" color='#fcfcfc' />
                </button>
            </li>
            <li>
                <a href="index.css">
                    <RiPercentLine size="2em" color='#fcfcfc' />
                    PROMOTIONS
                </a>
            </li>
            <li>
                <a href="index.css">
                    <RiContactsLine size="2em" color='#fcfcfc' />
                    CONTACT
                </a>
            </li>
            <li>
                <a href="index.css">
                    <RiQuestionMark size="2em" color='#fcfcfc' />
                    AIDE
                </a>
            </li>
        </ul>
    )
}
