import React from 'react'
import destockTitle from '../../../../assets/img/destock-title.png'
import { IoIosArrowForward } from 'react-icons/io'

export function ContentPromo() {
    return (
        <div className='content-promo'>
            <h2>DESTOCKAGE :</h2>
            <img src={destockTitle} alt="" />
            <p>Occasion, retours, finde serie...</p>
            <button>
                J'EN PROFITE
                <IoIosArrowForward size="0.6em"/>
            </button>
        </div>
    )
}
