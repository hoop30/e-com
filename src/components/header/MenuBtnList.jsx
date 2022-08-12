import React from 'react'
import products from "../../data/products.json"
import { BsThreeDots } from "react-icons/bs"
import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
// import { LiCategory } from './LiCategory'

export function MenuBtnList({ classStyle, reset }) {
    let categorys = []
    let i = 0

    const [liListe, setLislist] = useState(products)

    function liListeset(e) {
        setLislist(products[e.target.name])
    }

    function returnBackSet() {
        setLislist(products)
    }

    if (reset && liListe !== products) {
        returnBackSet()
    }

    for (const category in liListe) {

        // typeof, to set if under category exist
        if (typeof liListe[category][0] !== "string") {
            const newCategory = <li key={i}>
                <button onClick={liListeset} name={category}>
                    {category}
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </button>
            </li>

            categorys[i] = newCategory
        } else {
            const newCategory = <li key={i}>
                <a href="index.html">
                    {category}
                </a>
            </li>

            categorys[i] = newCategory
        }


        i++
    }

    if (liListe !== products) {
        const returnBack = <li key={i + 1}>
            <button onClick={returnBackSet} className="return">
                <IoIosArrowBack/>
                RETOUR
            </button>
        </li>

        categorys.unshift(returnBack)
    }

    return (
        <ul className={classStyle}>
            {categorys}
        </ul>
    )
}
