import React, { useContext } from 'react'
import { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { FilterValueContext } from '../../../context/FilterValueContext'
import { FilterPriceContext } from '../../../context/FilterPriceContext'
import { FilterCurrentPriceContext } from '../../../context/FilterCurrentPriceContext'
import { FormatPrice } from '../../../utils/FormatPrice'


export function ProductFilterForm() {
    
    const [rangeValue, setRangeValue] = useState('100')
    const [formPrice, setFormPrice] = useState(false)
    const [btnFormPriceStyle, setBtnFormPriceStyle] = useState('formBtn-price')
    const [inputFormPriceStyle, setInputFormPriceStyle] = useState('form-input-price')
    const { handleSetValueFilter } = useContext(FilterValueContext)
    const { FilterPrice } = useContext(FilterPriceContext)
    //const [curentPrice, setCurentPrice] = useState(null)
    const {FilterCurrentPrice, currentPriceChange} = useContext(FilterCurrentPriceContext)
    const [minPrice, setMinPrice] = useState('€')
    const [maxPrice, setMaxPrice] = useState('€')

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
        
        setRangeValue(e.target.value)
        const calc = minPrice + ((maxPrice - minPrice) * (e.target.valueAsNumber / 100))
        
        if (e.target.value === 1) {
            currentPriceChange(minPrice)
            console.log(minPrice);
        } else {
            currentPriceChange(calc.toFixed(2))
        }
    }

    if (FilterPrice !== null) {
        if(FilterCurrentPrice === null || (minPrice !== FilterPrice[0] || maxPrice !== FilterPrice[FilterPrice.length - 1])) {
            setMinPrice(FilterPrice[0])
            setMaxPrice(FilterPrice[FilterPrice.length - 1])
            currentPriceChange(FilterPrice[FilterPrice.length - 1])
        }
    }

    return (
        <form action="filter" className='product-filter-form'>
            <h2>FILTRER LES PRODUITS :</h2>
            <div className='form form-search'>
                <label htmlFor="designation">CHERCHER UNE RÉFÉRENCE</label>
                <div className='input-search'>
                    <input id='designation' type="text" placeholder='Désignation, modèle ...' onKeyUp={handleSetValueFilter}/>
                    <div className='search-logo center'>
                        <IoSearchOutline size="1.5em" color='grey' id='searchBtn' />
                    </div>
                </div>
            </div>
            <div className='form form-price'>
                <div className='label-price' onClick={openForm}>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <span>En €</span>
                    </div>
                    <div>
                        <button className={btnFormPriceStyle}>
                            <IoIosArrowDown size="2em"/>
                        </button>
                    </div>
                </div>
                <div className={inputFormPriceStyle}>
                    <div className='min-max'>
                        <FormatPrice price={minPrice}/>
                        <FormatPrice price={maxPrice}/>
                    </div>
                    <input id='price' type="range" min="1" max="100" value={rangeValue} placeholder='Désignation, modèle ...' step="0.01" onChange={onRangeChange}/>
                    <div className='current-price'>
                        <FormatPrice price={FilterCurrentPrice}/>
                    </div>
                </div>
            </div>
        </form>
    )
}
