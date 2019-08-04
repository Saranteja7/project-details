import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from '../reducers/products';
import thunk from 'redux-thunk'; 

function getStore() {
    return createStore(
        combineReducers({
            products: productsReducer
        }),
        applyMiddleware( thunk )
    );
}

export default getStore;