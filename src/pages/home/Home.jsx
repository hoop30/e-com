import React from 'react'
import { PromoBanner } from './components/PromoBanner/PromoBanner'
import { Content } from './components/content/Content'
import { useContext } from 'react'
import { HomeBackgroundContext } from '../../context/HomeBackgroundContext'


export function Home() {
    const {HomeBackground} = useContext(HomeBackgroundContext)

    return (
        <div className={HomeBackground}>
            <PromoBanner />
            <Content />
        </div>
    )
}
