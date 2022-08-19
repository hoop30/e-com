import React from 'react'
import { ContentProductSlide } from './ContentProductSlide'
import { ContentMap } from './ContentMap'
import { ContentPromo } from './ContentPromo'
import { ContentService } from './ContentService'

export function Content() {

    return (
        <div className='content'>
            <ContentProductSlide/>
            <ContentMap/>
            <ContentPromo/>
            <ContentService/>
        </div>
    )
}
