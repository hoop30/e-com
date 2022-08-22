import React from "react";
import { useState } from "react";
import { Slide } from "react-slideshow-image"
import { ContentProducts } from './ContentProducts'
import 'react-slideshow-image/dist/styles.css';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export const ContentProductSlide = () => {

    const [slideNumber, setslideNumber] = useState(2)
    
    window.onresize = SlideLayout
    function SlideLayout() {
    console.log(slideNumber);

        if (window.innerWidth < 480 && slideNumber !== 1) {
            setslideNumber(1)
        } else if (window.innerWidth > 480 && window.innerWidth < 780 && slideNumber !== 2) {
            setslideNumber(2)
        } else if (window.innerWidth > 780 && slideNumber !== 3) {
            setslideNumber(3)
        }
    }
    
    return (
        <div className="ContentProducts">
            <h2>PRODUITS</h2>
            <div className="slide-container">
                <Slide {...properties} slidesToScroll={slideNumber} slidesToShow={slideNumber}>
                    <div className="each-slide">
                        <ContentProducts number='0' />
                    </div>
                    <div className="each-slide">
                        <ContentProducts number='1' />
                    </div>
                    <div className="each-slide">
                        <ContentProducts number='2' />
                    </div>
                    <div className="each-slide">
                        <ContentProducts number='3' />
                    </div>
                </Slide>
            </div>
        </div>
    );
};


