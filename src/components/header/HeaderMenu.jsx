import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine, RiPercentLine, RiContactsLine, RiQuestionMark } from "react-icons/ri";
import { HeaderMenuList } from './HeaderMenuList'

export function HeaderMenu() {

    const [showProducts, setshowProducts] = useState(false)
    let HeaderMenuListClass = "HeaderMenuList hidden"
    showProducts ? HeaderMenuListClass = "HeaderMenuList" : HeaderMenuListClass = "HeaderMenuList hidden"

    function showProductstrue() {
        setshowProducts(true)
    }
    function showProductsfalse() {
        setshowProducts(false)
    }

    return (
        <ul className='headerMenu'>
            <li onMouseEnter={showProductstrue} onMouseLeave={showProductsfalse}>
                <button aria-current="page" href="index.css">
                    TOUS NOS PRODUITS
                    <RiArrowDropDownLine size="2em" color='#fcfcfc' />
                </button>
                <div className={HeaderMenuListClass}>
                    <HeaderMenuList showProducts={showProducts}/>
                </div>
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
