import React from 'react';
import ProductsService from '../services/products';
import { LOADED_PRODUCTS } from '../actions/constants';

const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
const ERROR_LOADING_PRODUCTS = 'ERROR_LOADING_PRODUCTS';

import { Link } from 'react-router-dom';

class ProductList extends React.Component {
    state = {
        status: LOADING_PRODUCTS
    };

    render() {
        let el;

        switch( this.state.status ) {
            case LOADING_PRODUCTS:
                el = (
                    <div className="alert alert-info">
                        Products are being fetched. Please wait...
                    </div>
                );
                break;
            case LOADED_PRODUCTS:
                el = (
                    <div className="row">
                        {
                            this.props.products.map( product => (
                                <div className="col-3 my-3">
                                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div class="card">
                                            <img class="card-img-top w-75 d-block mx-auto" src={product.imageUrl} alt="" />
                                            <div class="card-body">
                                                <h4 class="card-title">{product.name}</h4>
                                                <p class="card-text">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                );
                break;
            case ERROR_LOADING_PRODUCTS:
                el = (
                    <div className="alert alert-danger">
                        <h4>Unable to fetch products</h4>
                        <hr />
                        {this.state.error.message}
                    </div>
                );
                break;
            default:
                el = (
                    <div className="alert alert-danger">
                        Unknown error
                    </div>
                );
                break;
        }

        return (
            <div className="container">
                <h2>Product Catalog</h2>
                <hr />
                {el}
            </div>
        );
    }

    componentDidMount() {
        ProductsService.getProducts()
            .then(products => {
                this.props.loadedProducts( products );
                this.setState({
                    status: LOADED_PRODUCTS
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: ERROR_LOADING_PRODUCTS
                });
            });
    }
}
 
export default ProductList;