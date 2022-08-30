import React from 'react'
import { PromoBanner } from './components/promoBanner/PromoBanner'
import { Content } from './components/content/Content'

export function Home() {

    return (
        <div className='home'>
            <PromoBanner />
            <Content />
        </div>
    )
}
