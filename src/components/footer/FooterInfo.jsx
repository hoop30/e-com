import React from 'react'
import serviceClient from '../../assets/img/service-client.png'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegPaperPlane } from 'react-icons/fa'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { BsCreditCard } from 'react-icons/bs'


export function FooterInfo() {
    return (
        <div className='footer-info'>
            <div className="footer-top-grid">
                <ul className='footer-who'>
                    <li>
                        <h2>QUI SOMMES NOUS ?</h2>
                        <span></span>
                    </li>
                    <li><a href="index.html">Notre Histoire</a></li>
                    <li><a href="index.html">CGV / Avis clients</a></li>
                    <li><a href="index.html"><p>Données personnelles et Cookies</p></a></li>
                    <li><a href="index.html">Gérer mes cookies</a></li>
                    <li><a href="index.html">Mentions légales</a></li>
                </ul>
                <ul className='footer-join'>
                    <li>
                        <h2>NOUS REJOINDRE :</h2>
                        <span></span>
                    </li>
                    <li><a href="index.html">Vendez sur LDLC.COM</a></li>
                    <li><a href="index.html">Recrutement</a></li>
                    <li><a href="index.html">l'École LDLC</a></li>
                    <li><a href="index.html">Marketplace</a></li>
                </ul>
                <ul className='footer-help'>
                    <li>
                        <h2>BESOIN D'AIDE ?</h2>
                        <span></span>
                    </li>
                    <li><a href="index.html">Questions fréquentes</a></li>
                    <li><a href="index.html">Modes de livraison</a></li>
                    <li><a href="index.html">Modes de règlement</a></li>
                    <li><a href="index.html">Garanties et Pack Confort</a></li>
                    <li><a href="index.html">Demander un retour</a></li>
                </ul>
                <div className='footer-contact'>
                    <ul className='footer-contact-layout'>
                        <li className='li-title'>
                            <h2>NOUS CONTACTER :</h2>
                            <span></span>
                        </li>
                        <li className='li-img'>
                            <img src={serviceClient} alt="" />
                        </li>
                        <li className='li-email'>
                            <a href="index.html">PAR EMAIL</a>
                        </li>
                        <li className='li-bva'>
                            <p>*Étude BVA – Viséo CI – Plus d’infos sur escda.fr</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-layout">
                <div>
                    <GiCardboardBoxClosed size="3.5em"/>
                    <h2>Débit à l'expédition</h2>
                    <p>Aucun prélèvement avant la préparation de votre colis.</p>
                </div>
                <div>
                    <BsCreditCard size="3.5em"/>
                    <h2>Paiement en 3 fois</h2>
                    <p>Par carte bancaire à partir de 100€ d'achat.</p>
                </div>
                <div>
                    <FaRegPaperPlane size="3.5em"/>
                    <h2>Livraison DOM-TOM</h2>
                    <p>Nous livrons dans les DOM-TOM en HT !</p>
                </div>
                <div>
                    <TbTruckDelivery size="3.5em"/>
                    <h2>Livraison express</h2>
                    <p>Livré demain avant 13h !</p>
                </div>
            </div>
        </div>
    )
}
