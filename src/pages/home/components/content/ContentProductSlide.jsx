import React from "react";
import { useState } from "react";
import { Slide } from "react-slideshow-image"
import { ContentProducts } from './ContentProducts'
import 'react-slideshow-image/dist/styles.css';
import { useEffect } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useCallback } from "react";

const buttonStyle = {
    background: 'none',
    border: '0',
};

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowBack size='3em'/></button>,
    nextArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowForward size='3em'/></button>,
    onChange: (oldIndex, newIndex) => {
        //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export const ContentProductSlide = () => {

    const [slideNumber, setslideNumber] = useState(0)
    
    const SlideLayout = useCallback(() => {
        if (window.innerWidth < 480 && slideNumber !== 1) {
            setslideNumber(1)
        } else if (window.innerWidth > 480 && window.innerWidth < 780 && slideNumber !== 2) {
            setslideNumber(2)
        } else if (window.innerWidth > 780 && slideNumber !== 3) {
            setslideNumber(3)
        }
    }, [slideNumber])
    
    window.onresize = SlideLayout
    
    useEffect(() => {
        SlideLayout()
    }, [SlideLayout])
    
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


