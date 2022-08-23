import React from 'react'
import { PLCategoryBox } from './PLCategoryBox'

export function PLSubList({location, categorys}) {
    let subListBox = []

    if (categorys !== undefined) {
        for (const key in categorys) {
            const category = categorys[key].name

            if (category === location) {
                const suList = categorys[key].children
                
                for (const subCategory in suList) {
                    const name = suList[subCategory].name
                    const photo = suList[subCategory].assets[0].url
                    const newBox = PLCategoryBox(name, photo)
                    
                    subListBox.push(newBox)
                }
            }
        }
    }

    return (
        <div className='pl-SubList'>
            <h2>NOS CATÉGORIE IMFORMATIQUE :</h2>
            {subListBox}
        </div>
    )
}
