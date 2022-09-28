import { useEffect } from 'react'
import {FetchProducts} from '../lib/FetchProducts'
import {FetchCategorys} from '../lib/FetchCategorys'


export async function SearchObjetct() {
    
    const categorys = await FetchCategorys()
    const products = await FetchProducts()

    let object = []
    if (products !== undefined && categorys !== undefined) {
        categorys.forEach(element => {
            object[element.name] = {}
            element.children.forEach(subelement => {
                object[element.name][subelement.name] = []
            })
        })
        products.forEach(element => {
            const sub = element.categories[0].name
            const cat = element.categories[1].name
            object[cat][sub].push(element.name)
        })
    }
    return object
}
