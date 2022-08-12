import React from 'react'
import products from "../../data/products.json"
import { BsThreeDots } from "react-icons/bs"


export function LiCategory() {
    let categorys = []
    let i = 0

    for (const category in products) {
        // typeof, to set if under category exist
        if (typeof products[category][0] !== "string") {
            const newCategory = <li key={i}>
                <a href="index.html">
                    {category}
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </a>
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

    return categorys
}
