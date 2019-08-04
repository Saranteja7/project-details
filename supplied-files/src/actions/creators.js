import { LOADED_PRODUCTS } from './constants';

const loadedProductsAC = ( products ) => {
    return {
        type: LOADED_PRODUCTS,
        payload: {
            products: products
        }
    };
}

export {
    loadedProductsAC
};