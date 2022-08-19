import React, { useCallback } from 'react'
import imgPromo50 from '../../../../assets/img/promo/promo50.jpg'
import imgPromoBFS from '../../../../assets/img/promo/promoBFS.jpg'
import imgPromoBlackFriday from '../../../../assets/img/promo/promoBlackFriday.jpg'
import imgPromoOpen from '../../../../assets/img/promo/promoOpen.jpg'
import imgPromoProducts from '../../../../assets/img/promo/promoProducts.jpg'
import { Slide } from "react-slideshow-image"
import { useEffect } from 'react'

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
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }

    function ok() {
        console.log('ok')
    }


    var targetNode = document.querySelectorAll('#indic')

    var config = { attributes: true}

    var callback = function(mutationsList) {
        console.log('ok');
        for(var mutation of mutationsList) {
            if (mutation.type == 'attributes') {
                console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
            }
        }
    }

    var observer = new MutationObserver(callback)

    console.log(targetNode)
    if (targetNode.length !== 0) {
        targetNode.forEach(element => {
            observer.observe(element, config)
        });
    }

    return (
        <div className='promoBanner'>
            <Slide {...properties} indicators={indicators} onAnimationEnd={ok}>
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
