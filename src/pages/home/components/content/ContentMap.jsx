import React from 'react'
import map from '../../../../assets/img/map.png'
import { IoIosArrowForward } from 'react-icons/io'

export function ContentMap() {
    return (
        <div className='contentMap'>
            <h2>FUTURE PRÈS DE CHEZ VOUS:</h2>
            <img src={map} alt="" />
            <p>Coordonnées, plan d'accès, horraire d'ouvertures...</p>
            <button className="btn">
                TROUVER MA BOUTIQUE
                <IoIosArrowForward size="0.6em"/>
            </button>
        </div>
    )
}
