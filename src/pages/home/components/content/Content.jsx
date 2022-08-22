import React from 'react'
import { ContentProductSlide } from './ContentProductSlide'
import { ContentMap } from './ContentMap'
import { ContentPromo } from './ContentPromo'
import { ContentService } from './ContentService'
import { ContentBrand } from './ContentBrand'

export function Content() {

    return (
        <div className='content'>
            <div className="main">
                <ContentProductSlide/>
                <ContentBrand/>
            </div>
            <div className="side">
                <ContentMap/>
                <ContentPromo/>
                <ContentService/>
            </div>
        </div>
    )
}
