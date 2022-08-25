import React from 'react'
import { PLCategoryBox } from './PLCategoryBox'

export function PLSubList({location, categorys}) {
    let subListBox = []
    let category = ''

    if (categorys !== undefined) {
        for (const key in categorys) {
            const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            if (normCategory === location) {
                const suList = categorys[key].children
                category = categorys[key].name
                
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
            <h2>NOS CATÉGORIES {category.toUpperCase()} :</h2>
            <div className="pl-box">
                {subListBox}
            </div>
        </div>
    )
}
