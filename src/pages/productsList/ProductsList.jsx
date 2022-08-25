import React, { useState, useEffect, useContext } from 'react'
import { Breadcrumb } from '../../utils/Breadcrumb'
import { Products } from './components/Products'
import { ProductsFilter } from './components/ProductsFilter'
import { FetchCategorys } from '../../utils/FetchCategorys'
import { FetchProducts } from '../../utils/FetchProducts'
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
        <div className='productsList'>
            <div className="productListBox">
                <Breadcrumb location={location} categorys={categorys} />
                <p className='categoryList-topText'>
                    Ça y est, votre configuration est prête ! Vous avez décidé de monter vous-même votre nouvel ordinateur de bureau et êtes à la recherche d’un boîtier PC adapté à votre configuration. Vous trouverez sur LDLC.com un grand choix de tours PC gaming ou Desktop (bureau) pour monter un PC personnalisé unique parfaitement adapté à vos besoins, à votre budget, vos composants informatiques et vos goûts esthétiques.

                    Découvrez nos modèles sobres de boîtiers PC en aluminium ou en acier très résistants qui sont parfaits pour une utilisation bureautique, mais aussi les tours gamer au look sportif ou agressif jusqu’aux mini
                    …
                    <button>Lire la suite</button>
                </p>
                <div className="productLayout">
                    <ProductsFilter />
                    <Products location={location} products={products} />
                </div>
                <p className='categoryList-bottomText'>
                    … boîtiers PC parfaits pour créer un PC home cinéma ou les espaces réduits. Vous êtes un joueur et l'esthétique de votre tour tout comme ses fonctionnalités sont des paramètres très importants pour vous ? Nos boîtiers PC gamer disposent de flux de ventilation optimisés, de fenêtres transparentes sur leur intérieur, d’éclairages LED RGB ultra-stylés et s’adaptent aux cartes graphiques plus longues. Ils offrent également une connectique externe variée allant des ports USB, connectique audio (prise Jack 3.5 mm), rhéobus pour régler les ventilateurs, etc. Avec leurs nombreux emplacements 3,5", emplacements 2,5" et emplacements 5,25", ils seront à même de contenir le nombre d'unités de disque durs internes et de lecteurs optiques dont vous avez besoin ! Vous envisagez d'ajouter à votre configuration un système de watercooling ? Nous vous proposons tout un panel de boîtiers PC compatibles watercooling pour profiter d’un système de refroidissement ultra-performant : l’idéal pour les joueurs passionnés ou les adeptes de l’overclocking ! Pour bénéficier d’un tarif attractif, optez pour un boîtier PC avec alimentation. Corsair, Cooler Master, Zalmann, les plus grandes marques vous attendent !

                    Une hésitation ? Consultez dès maintenant notre guide pour bien choisir un boîtier PC ! De nombreuses informations pour finaliser votre choix ! Découvrez sur LDLC notre guide de montage PC pour pouvoir monter votre machine vous même !
                </p>
            </div>
        </div>
    )
}
