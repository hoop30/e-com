import React from 'react'
import { LiCategory } from './LiCategory'

export function ProductsMenu({ classStyle, reset }) {

    return (
        <ul className={classStyle}>
            <LiCategory reset={reset}/>
        </ul>
    )
}
