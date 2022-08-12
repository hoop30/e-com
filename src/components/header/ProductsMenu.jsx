import React from 'react'
import { LiCategory } from './LiCategory'

export function ProductsMenu({ classStyle }) {

    return (
        <ul className={classStyle}>
            <LiCategory />
        </ul>
    )
}
