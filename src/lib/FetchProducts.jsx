import Commerce from '@chec/commerce.js';

export const FetchProducts = (set) => {
    const commerce = new Commerce(' pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91 ');
    commerce.products.list().then((products) => {
        set(products.data);
    }).catch((error) => {
        console.log('There was an error fetching the products', error)
    });
}

// ========

/*

, { useState, useEffect }
import React, { useState, useEffect } from 'react'


const [products, setProducts] = useState()
    
useEffect(() => {
    FetchProducts(setProducts);
}, []);

*/