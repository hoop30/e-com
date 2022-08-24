import React, { useContext, useState, useEffect } from 'react'
import { FetchProducts } from '../../utils/FetchProducts'
import { FetchCategorys } from '../../utils/FetchCategorys'
import { PLBreadcrumb } from './components/PLBreadcrumb'
import { LocationContext } from '../../context/LocationContext'
import { PLSubList } from './components/PLSubList'
import { PLTopVente } from './components/PLTopVente'

export function ProductsList() {
    const { location, setLocationlocalStorage } = useContext(LocationContext)
    const [categorys, setCategorys] = useState()
    const [products, setProducts] = useState()

    if (location !== null) {
        localStorage.setItem('location', location)
    } else {
        setLocationlocalStorage()
    }

    useEffect(() => {
        FetchCategorys(setCategorys)
        FetchProducts(setProducts)
    }, [])

    return (
        <div className='productsList'>
            <div className="productsListBox">
                <PLBreadcrumb location={location} />
                <p className='productsList-topText'>L'informatique est partout aujourd'hui. Depuis les affichages publics en passant par votre salon, votre décodeur TV, et jusqu'à votre téléphone. FUTURE.com vous propose une immense sélection de produits afin de profiter de toutes les possibilités actuelles de l'informatique. Avec notre système de filtres complet vous trouverez facilement ce que vous cherchez et pourrez profiter de toute la puissance et de tout le confort de l'informatique moderne ! Nous vous proposons tout d'abord notre catégorie phare des pièces informatiques. Avec tous les produits que nous vous proposons vous pourrez créer votre système de toutes pièces, que vous ayez pour projet de
                    … <button>Lire la suite</button></p>
                <PLSubList location={location} categorys={categorys} />
                <PLTopVente location={location} categorys={categorys} products={products} />
                <p className='productsList-bottomText'>
                    … monter un PC gamer, un PC de bureau, un Media center, un serveur, une station de travail ou bien un projet plus spécial encore ! Vous avez les idées mais pas le temps d'assembler ou installer votre système ? Nous le faisons pour vous !
                </p>
                <p className='productsList-bottomText'>
                    Votre projet est plus clair et vous avez simplement besoin d'une machine adaptée à vos besoins ? Nos catégories ordinateur portable (et PC portable gamer) ou ordinateur de bureau (et PC gamer) possèdent des filtres particulièrement détaillés pour que nous puissions trouver pour vous la machine qui convient exactement à vos critères en deux clics de souris ! Depuis les périphériques PC en passant par le matériel Réseau afin de créer votre propre réseau local LAN, FUTURE.com vous propose tous les produits dont vous pourriez avoir besoin et vous accompagne au fil de votre démarche, souris PC et écran PC compris !
                </p>
                <p className='productsList-bottomText'>
                    Que vous cherchiez un simple PC Caisse pas cher, un système de gestion des pièces qui laissera intact votre petit budget, une clé USB à petit prix ou une imprimante à petit TCO, faites le bon choix grâce à nos nombreux avis de clients ayant fait le test des produits et notre service client avant-vente ainsi que notre service client après-vente.
                </p>
            </div>
        </div>
    )
}