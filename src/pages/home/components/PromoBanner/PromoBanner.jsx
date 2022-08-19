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
        <div className="indicator">
            <img src={images[index+1]} alt="" />
        </div>
        )

    const properties = {
        duration: 6000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }

    return (
        // <div className='PromoBanner'>
        //     <img src={src} alt=""></img>
        // </div>
        <div className='promoBanner'>
            <Slide {...properties} indicators={indicators}>
                <div className="each-slide">
                    <img src={imgPromo50} alt="" />
                </div>
                <div className="each-slide">
                    <img src={imgPromoBFS} alt="" />
                </div>
                <div className="each-slide">
                    <img src={imgPromoBlackFriday} alt="" />
                </div>
                <div className="each-slide">
                    <img src={imgPromoOpen} alt="" />
                </div>
                <div className="each-slide">
                    <img src={imgPromoProducts} alt="" />
                </div>
            </Slide>
        </div>
    )

}
