import React from 'react'
import { Slide } from 'react-slideshow-image'
import { FormatPrice } from '../../../utils/FormatPrice'
import { MdOutlineAddShoppingCart } from 'react-icons/md'


export function PLTopVente({ location, categorys, products }) {

    const subList = []
    for (const key in categorys) {
        if (categorys[key].name === location) {
            //console.log(categorys[key].children)
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

    let productDiv = []
    subProduct.forEach(product => {

        const image = product.image.url
        const name = product.name
        const price = product.price.raw

        const newProductDiv = <div className="each-slide" key={name}>
            <div className='productSlide'>
                <div className='productBox'>
                    <a href='index.html' className='productBoxphoto'>
                        <img src={image} alt="" />
                    </a>
                    <a href='index.html' className='productName'>{name}</a>
                    <div className='price'>
                        <FormatPrice className='productPrice' price={price} />
                        <button>
                            <MdOutlineAddShoppingCart size="2em" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        productDiv.push(newProductDiv)
    })

    const properties = {
        duration: 5000,
        autoplay: false,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: "ease",
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    }

return (
    <div className='pl-topVente'>
        <h2>TOP DES VENTES INFORMATIQUE :</h2>
        <Slide {...properties}>
            {productDiv}
        </Slide>
    </div>
)
}
