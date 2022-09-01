import Commerce from '@chec/commerce.js';

export const FetchRetriveCart = (set) => {
    
    const commerce = new Commerce(' pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91 ');
    commerce.cart.retrieve().then((cart) => {
        set(cart);
    }).catch((error) => {
        console.log('There was an error fetching the products', error)
    });
}

// ========

/*

, { useState, useEffect }
import React, { useState, useEffect } from 'react'


const [cart, setCart] = useState()
    
useEffect(() => {
    FetchRetriveCart(setCart);
}, []);

*/