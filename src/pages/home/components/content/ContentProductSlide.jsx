import React from "react";
import { Slide } from "react-slideshow-image"
import { ContentProducts } from './ContentProducts'
import 'react-slideshow-image/dist/styles.css';
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const buttonStyle = {
    background: 'none',
    border: '0',
};

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowBack size='3em'/></button>,
    nextArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowForward size='3em'/></button>,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
}

export const ContentProductSlide = () => {
    
    return (
        <div className="ContentProducts">
            <h2>PRODUITS</h2>
            <div className="slide-container">
                <Slide {...properties}>
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


