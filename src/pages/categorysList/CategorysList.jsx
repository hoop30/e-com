import React, { useState, useEffect } from 'react'
import { FetchProducts } from '../../lib/FetchProducts'
import { FetchCategorys } from '../../lib/FetchCategorys'
import { Breadcrumb } from '../../layout/Breadcrumb'
import { CategorysSubList } from './components/CategorysSubList'
import { TopVente } from './components/TopVente'
import { useLocation } from "react-router-dom"; 

export function CategorysList() {

    const newLocation = useLocation()
    const loc = newLocation.search.substring(10)
    const location = loc.replace('%20', ' ')
    
    const [categorys, setCategorys] = useState()
    const [products, setProducts] = useState()

    useEffect(() => {
        FetchCategorys(setCategorys)
        FetchProducts(setProducts)
    }, [])

    return (
        <div className='category-list'>
            <div className="category-list-box">
                <Breadcrumb location={location} categorys={categorys} />
                <p className='top-text'>
                    L'informatique est partout aujourd'hui. Depuis les affichages publics en passant par votre salon, votre décodeur TV, et jusqu'à votre téléphone. FUTURE.com vous propose une immense sélection de produits afin de profiter de toutes les possibilités actuelles de l'informatique. Avec notre système de filtres complet vous trouverez facilement ce que vous cherchez et pourrez profiter de toute la puissance et de tout le confort de l'informatique moderne ! Nous vous proposons tout d'abord notre catégorie phare des pièces informatiques. Avec tous les produits que nous vous proposons vous pourrez créer votre système de toutes pièces, que vous ayez pour projet de
                    … <a href='#suite'>Lire la suite</a>
                </p>
                <CategorysSubList location={location} categorys={categorys} />
                <TopVente location={location} categorys={categorys} products={products} />
                <p className='bottom-text' id='suite'>
                    … monter un PC gamer, un PC de bureau, un Media center, un serveur, une station de travail ou bien un projet plus spécial encore ! Vous avez les idées mais pas le temps d'assembler ou installer votre système ? Nous le faisons pour vous !
                </p>
                <p className='bottom-text'>
                    Votre projet est plus clair et vous avez simplement besoin d'une machine adaptée à vos besoins ? Nos catégories ordinateur portable (et PC portable gamer) ou ordinateur de bureau (et PC gamer) possèdent des filtres particulièrement détaillés pour que nous puissions trouver pour vous la machine qui convient exactement à vos critères en deux clics de souris ! Depuis les périphériques PC en passant par le matériel Réseau afin de créer votre propre réseau local LAN, FUTURE.com vous propose tous les produits dont vous pourriez avoir besoin et vous accompagne au fil de votre démarche, souris PC et écran PC compris !
                </p>
                <p className='bottom-text'>
                    Que vous cherchiez un simple PC Caisse pas cher, un système de gestion des pièces qui laissera intact votre petit budget, une clé USB à petit prix ou une imprimante à petit TCO, faites le bon choix grâce à nos nombreux avis de clients ayant fait le test des produits et notre service client avant-vente ainsi que notre service client après-vente.
                </p>
            </div>
        </div>
    )
}