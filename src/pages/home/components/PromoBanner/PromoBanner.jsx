import React from 'react'
import { useState } from 'react'
import promo from "../../../../data/promo.json"
import imgPromo50 from '../../../../assets/img/promo/promo50.jpg'
import imgPromoBFS from '../../../../assets/img/promo/promoBFS.jpg'
import imgPromoBlackFriday from '../../../../assets/img/promo/promoBlackFriday.jpg'
import imgPromoOpen from '../../../../assets/img/promo/promoOpen.jpg'
import imgPromoProducts from '../../../../assets/img/promo/promoProducts.jpg'

export function PromoBanner() {
    
    const [Banner, setBanner] = useState('1')
    const images = {
        promo50: imgPromo50,
        promoBFS: imgPromoBFS,
        promoBlackFriday: imgPromoBlackFriday,
        promoOpen: imgPromoOpen,
        promoProducts: imgPromoProducts
    }

    let i = Banner
    setInterval(() => {
        i++
        if (i > 5) {
            i = 1
        }
        
        setBanner(i)
    }, 6000)

    const src = images[promo[Banner][0]]

    return (
        <div className='PromoBanner'>
            <img src={src} alt=""></img>
        </div>
    )

}
