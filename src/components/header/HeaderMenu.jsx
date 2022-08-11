import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export function HeaderMenu() {
    return (
        <ul className='headerMenu'>
            <li>
                <a aria-current="page" href="index.css">
                    Produit
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </a>
            </li>
            <li>
                <a href="index.css">
                    Promotions
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </a>
            </li>
            <li>
                <a href="index.css">
                    Contact
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </a>
            </li>
            <li>
                <a href="index.css">
                    Aide
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </a>
            </li>
        </ul>
    )
}
