import Commerce from '@chec/commerce.js';

export const FetchRemoveToCart = (productId) => {
    console.log('ok');
    const commerce = new Commerce(' pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91 ');
    commerce.cart.remove(productId).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log('There was an error fetching the products', error)
    });
}