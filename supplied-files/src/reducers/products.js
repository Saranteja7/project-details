import { LOADED_PRODUCTS } from '../actions/constants';

const productsReducer = ( curState = {}, action ) => {
    let newState;

    switch( action.type ) {
        case LOADED_PRODUCTS:
            newState = { ...curState };
            action.payload.products.forEach(
                item => {
                    newState[item.id] = item
                }
            )
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default productsReducer;