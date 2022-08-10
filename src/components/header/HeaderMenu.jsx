import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export function HeaderMenu() {
    return (
        <ul className='headerMenu'>
            <li>
                <a aria-current="page" href="index.css">Produit</a>
                <BsThreeDots size="2em" color='#ffd1b3'/>
            </li>
            <li>
                <a href="index.css">Promotions</a>
                <BsThreeDots size="2em" color='#ffd1b3'/>
            </li>
            <li>
                <a href="index.css">Contact</a>
                <BsThreeDots size="2em" color='#ffd1b3'/>
            </li>
            <li>
                <a href="index.css">Aide</a>
                <BsThreeDots size="2em" color='#ffd1b3'/>
            </li>
        </ul>
    )
}
