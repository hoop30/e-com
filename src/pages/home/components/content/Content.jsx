import React from 'react'
import { ContentProducts } from './ContentProducts'
import { ContentMap } from './ContentMap'
import { ContentPromo } from './ContentPromo'
import { ContentService } from './ContentService'

export function Content() {
    return (
        <div className='content'>
            <ContentProducts/>
            <ContentMap/>
            <ContentPromo/>
            <ContentService/>
        </div>
    )
}
