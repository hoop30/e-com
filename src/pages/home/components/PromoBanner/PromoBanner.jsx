import React from 'react'
import imgPromo50 from '../../../../assets/img/promo/promo50.jpg'
import imgPromoBFS from '../../../../assets/img/promo/promoBFS.jpg'
import imgPromoBlackFriday from '../../../../assets/img/promo/promoBlackFriday.jpg'
import imgPromoOpen from '../../../../assets/img/promo/promoOpen.jpg'
import imgPromoProducts from '../../../../assets/img/promo/promoProducts.jpg'
import { Slide } from "react-slideshow-image"

export function PromoBanner() {

    const images = {
        "1": imgPromo50,
        "2": imgPromoBFS,
        "3": imgPromoBlackFriday,
        "4": imgPromoOpen,
        "5": imgPromoProducts
    }

    const indicators = (index) => (
        <div className="indicator" id="indic">
            <img src={images[index + 1]} alt="" />
        </div>
    )

    const properties = {
        duration: 6000,
        transitionDuration: 500,
        infinite: true,
        indicators: indicators,
        arrows: false,
        pauseOnHover: true,
    }

    return (
        <div className='promoBanner'>
            <Slide {...properties}>
                <div className="each-slide" id='PromoSlide' >
                    <img src={imgPromo50} alt="" className='' />
                </div>
                <div className="each-slide" id='PromoSlide2'>
                    <img src={imgPromoBFS} alt="" />
                </div>
                <div className="each-slide" id='PromoSlide'>
                    <img src={imgPromoBlackFriday} alt="" />
                </div>
                <div className="each-slide" id='PromoSlide'>
                    <img src={imgPromoOpen} alt="" />
                </div>
                <div className="each-slide" id='PromoSlide'>
                    <img src={imgPromoProducts} alt="" />
                </div>
            </Slide>
        </div>
    )

}
