import React from 'react'
import { Slide } from 'react-slideshow-image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ProductDiv } from './ProductDiv'


export function PLTopVente({ location, categorys, products }) {
    let category = ''
    const subList = []
    
    for (const key in categorys) {
        const normCategory = categorys[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        if (normCategory === location) {
            category = categorys[key].name
            for (const sub in categorys[key].children) {
                subList.push(categorys[key].children[sub].name)
            }
        }
    }

    const subProduct = []
    if (products !== undefined) {
        products.forEach(product => {
            const subCategory = product.categories[0].name

            subList.forEach(element => {
                if (subCategory === element) {
                    subProduct.push(product)
                }
            })
        })
    }



    const buttonStyle = {
        background: 'none',
        border: '0',
    }

    const properties = {
        duration: 5000,
        autoplay: false,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: "ease",
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],
        prevArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowBack size='3em' /></button>,
        nextArrow: <button style={{ ...buttonStyle }} className='product-slide-btn'><IoIosArrowForward size='3em' /></button>,
    }
    console.log(category);
    return (
        <div className='pl-topVente'>
            <h2>TOP DES VENTES {category.toUpperCase()} :</h2>
            <Slide {...properties}>
                <div className="each-slide">
                    <ProductDiv subProduct={subProduct} number='0' />
                </div>
                <div className="each-slide">
                    <ProductDiv subProduct={subProduct} number='1'/>
                </div>
                <div className="each-slide">
                    <ProductDiv subProduct={subProduct} number='2'/>
                </div>
                <div className="each-slide">
                    <ProductDiv subProduct={subProduct} number='3'/>
                </div>
            </Slide>
        </div>
    )
}
