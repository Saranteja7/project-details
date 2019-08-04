import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { loadedProductsAC } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    products: Object.values( state.products )
});

const mapDispatchToProps = ( dispatch ) => ({
    loadedProducts: ( products ) => dispatch( loadedProductsAC( products ) )
});

const ProductsListContainer = connect( mapStateToProps, mapDispatchToProps )( ProductsList );

export default ProductsListContainer;