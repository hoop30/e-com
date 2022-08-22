import React from 'react'
import apple from '../../../../assets/img/brands/apple.jpg';
import epos from '../../../../assets/img/brands/epos.jpg';
import intel from '../../../../assets/img/brands/intel.jpg';
import lenevo from '../../../../assets/img/brands/lenovo.jpg';
import devolo from '../../../../assets/img/brands/devolo.jpg';
import link from '../../../../assets/img/brands/d-link.gif';

export function ContentBrand() {
    return (
        <div className='contentBrand'>
            <button className='btn'>VOIR +</button>
            <h2>NOS SHOPS DE MARQUES</h2>
            <ul className='brands'>
                <li><img src={apple} alt="" /></li>
                <li><img src={epos} alt="" /></li>
                <li><img src={intel} alt="" /></li>
                <li><img src={lenevo} alt="" /></li>
                <li><img src={devolo} alt="" /></li>
                <li><img src={link} alt="" /></li>
            </ul>
        </div>
    )
}