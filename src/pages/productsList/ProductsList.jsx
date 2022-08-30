import React, { useState, useEffect } from 'react'
import { Breadcrumb } from '../../layout/Breadcrumb'
import { Products } from './components/Products'
import { ProductsFilter } from './components/ProductsFilter'
import { FetchCategorys } from '../../lib/FetchCategorys'
import { FetchProducts } from '../../lib/FetchProducts'
import { useLocation } from 'react-router-dom'


export function ProductsList() {

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
        <div className='products-list'>
            <div className="products-list-box">
                <Breadcrumb location={location} categorys={categorys} />
                <p className='top-text'>
                    Vous êtes régulièrement en déplacement, vous n'aimez pas devoir utiliser un ordinateur autre que le vôtre, vous subissez des coupures de courant fréquentes, ou encore vous aimez pouvoir être sur votre ordinateur tout en étant installé dans votre canapé ou dans votre lit selon votre humeur ? Avec l'énorme gamme de modèles de PC portable LDLC.com vous pourrez facilement voir ces problèmes résolus sans rien sacrifier à la performance ou au confort d'utilisation de votre PC. Travailleur itinérant, vous avez besoin d'un ordinateur pour votre divertissement mais aussi pour communiquer et pour votre activité ! Nous avons un ensemble de …
                    <button>Lire la suite</button>
                </p>
                <div className="product-layout">
                    <ProductsFilter />
                    <Products location={location} products={products} />
                </div>
                <p className='bottom-text'>
                    … PC portable Bureautique adapté à vos besoins, et ce à des prix tout à fait confortables ! Avec ces ordinateurs portables vous pourrez travailler, regarder un film ou consulter des sites Internet ou que vous vous trouviez (sous réserve de connexion internet disponible) !
                </p>
                <p className='bottom-text'>
                    Vous avez besoin de plus de puissance, et vous pensez que seul un PC de bureau peut vous assurer le rendement dont vous avez besoin ? Que vous aimiez jouer aux jeux vidéo, faire du graphisme ou de la photo, nous vous proposons des PC à la puissance comparable à leurs équivalents fixes. Ne faites plus le choix entre confort et performance, jetez un oeil sur nos PC portables haut de gamme !
                </p>
                <p className='bottom-text'>
                    Qu'il s'agisse de profiter de tout le divertissement multimédia, de regarder des films, de consulter des sites Internet ou même de jouer à des jeux vidéo, nous avons le PC portable Bureautique ou le PC portable Gamer qu'il vous faut. Toutes les grandes marques de PC portable sont sur LDLC.com !
                </p>
            </div>
        </div>
    )
}
