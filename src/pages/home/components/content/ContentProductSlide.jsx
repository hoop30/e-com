import React from "react";
import { Slide } from "react-slideshow-image"
import { ContentProducts } from './ContentProducts'



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
};

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


