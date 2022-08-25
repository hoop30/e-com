import React from 'react'

export function ContentProductFilter({isShowing}) {
    let formProductsFilterClass = 'formProductsFilter'

    isShowing ? formProductsFilterClass = 'formProductsFilter fadein' : formProductsFilterClass = 'formProductsFilter fadeout'
    
    return (
        <div className={formProductsFilterClass}>
            <h2>Filtrer les produits :</h2>
            <form action="filter">
                <div>
                    <label htmlFor="designation">Chercher une référence</label>
                    <input id='designation' type="text" placeholder='Désignation, modèle ...' />
                    <button></button>
                </div>
                <div>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <span>En €</span>
                    </div>
                    <input id='price' type="text" placeholder='Désignation, modèle ...' />
                </div>
            </form>
            <button>close</button>
        </div>
    )
}
