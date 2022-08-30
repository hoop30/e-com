import React from 'react'
import configLove from '../../../../assets/img/config-love.png'
import { IoIosArrowForward } from 'react-icons/io'

export function ContentService() {
    return (
        <div className='content-service'>
            <h2>CONFIGURATEUR PC :</h2>
            <a href="index.html">
                <div>
                    <p>Créez en quelques clics <strong>un PC adapté à vos besoins et votre budget</strong> avec le Configurateur FUTURE et son <strong>moteur de compatibilité !</strong></p>
                    <button>
                        JE CREE MON PC
                        <IoIosArrowForward size="0.6em" />
                    </button>
                </div>
                <img src={configLove} alt="" />
            </a>
        </div>
    )
}
