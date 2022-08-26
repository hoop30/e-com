import React from 'react'
import { IoSearchOutline } from "react-icons/io5"


export function ProductFilterForm() {
    
    
    function onPriceChange(e) {
        const currentPrice = document.querySelector('.current-price>p')
        currentPrice.style.left = `${e.target.valueAsNumber -2}%`
    }


    return (
        <form action="filter" className='productFilterForm'>
            <h2>Filtrer les produits :</h2>
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
                <div>
                    <label htmlFor="price">Prix</label>
                    <span>En €</span>
                </div>
                <div className='input-price'>
                    <div className='min-max'>
                        <span>min</span>
                        <span>max</span>
                    </div>
                    <input id='price' type="range" min="1" max="100" value="100" placeholder='Désignation, modèle ...' step="0.01" onChange={onPriceChange}/>
                    <div className='current-price'>
                        <p>prix</p>
                    </div>
                </div>
            </div>
        </form>
    )
}
