import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { ProductPhoto } from '../../../../utils/ProductPhoto'
//import productData from '../../../../data/productData.json'
import { FormatPrice } from '../../../../utils/FormatPrice'

export function ContentProducts() {

    const photo = ProductPhoto()
    const newPhoto = photo['Usb superKey'][0]
    const prix = "100.90"
    const newPrice = FormatPrice(prix)
    const name = "Mon super ordi"

    return (
        <div className='ContentProducts'>
            <h2>PRODUITS</h2>
            <div className='productSlide'>
                <div className='arrowLeft'>
                    <IoIosArrowBack size="3em" className='arrow'/>
                </div>
                <div className='productBox'>
                    <a href='index.html' className='productBoxphoto'>
                        <img src={newPhoto} alt="" />
                    </a>
                    <a href='index.html' className='productName'>{name}</a>
                    <div className='price'>
                        <p className='productPrice'>{newPrice}</p>
                        <button>
                            <MdOutlineAddShoppingCart size="2em"/>
                        </button>
                    </div>
                </div>
                <div className='arrowRight'>
                    <IoIosArrowForward size="3em" className='arrow'/>
                </div>
            </div>
        </div>
    )
}
