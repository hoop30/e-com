import React from 'react'
import { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"


export function ProductFilterForm() {
    
    const [rangeValue, setRangeValue] = useState('100')
    const [formPrice, setFormPrice] = useState(false)
    const [btnFormPriceStyle, setBtnFormPriceStyle] = useState('formBtn-price')
    const [inputFormPriceStyle, setInputFormPriceStyle] = useState('form-input-price')

    
    function openForm(e) {
        e.preventDefault()
        setFormPrice(!formPrice)
        
        if (formPrice) {
            setBtnFormPriceStyle('formBtn-price open')
            setInputFormPriceStyle('form-input-price open')
        } else {
            setBtnFormPriceStyle('formBtn-price') 
            setInputFormPriceStyle('form-input-price')
        }
    }
    

    function onRangeChange(e) {
        onPriceChange(e)
        setRangeValue(e.target.valueAsNumber)
    }


    function onPriceChange(e) {
        const currentPrice = document.querySelector('.current-price>p')
        currentPrice.style.left = `${e.target.valueAsNumber }%`
    }


    return (
        <form action="filter" className='product-filter-form'>
            <h2>FILTRER LES PRODUITS :</h2>
            <div className='form form-search'>
                <label htmlFor="designation">CHERCHER UNE RÉFÉRENCE</label>
                <div className='input-search'>
                    <input id='designation' type="text" placeholder='Désignation, modèle ...' />
                    <button>
                        <IoSearchOutline size="1.5em" color='grey' id='searchBtn' />
                    </button>
                </div>
            </div>
            <div className='form form-price'>
                <div className='label-price'>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <span>En €</span>
                    </div>
                    <div>
                        <button className={btnFormPriceStyle} onClick={openForm}>
                            <IoIosArrowDown size="2em"/>
                        </button>
                    </div>
                </div>
                <div className={inputFormPriceStyle}>
                    <div className='min-max'>
                        <span>min</span>
                        <span>max</span>
                    </div>
                    <input id='price' type="range" min="1" max="100" value={rangeValue} placeholder='Désignation, modèle ...' step="0.01" onChange={onRangeChange}/>
                    <div className='current-price'>
                        <p>prix</p>
                    </div>
                </div>
            </div>
        </form>
    )
}
