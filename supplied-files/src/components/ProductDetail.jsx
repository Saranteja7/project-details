import React, { Component } from 'react';
import ProductsService from '../services/products';

import Reviews from './Reviews';
import AddReview from './AddReview';

class ProductDetail extends Component {
    state = {
        status: 'LOADING_PRODUCT_DETAILS',
        products: []
    };

    render() {
        let el;

        switch( this.state.status ) {
            case 'LOADING_PRODUCT_DETAILS':
                el = (
                    <div className="alert alert-info">
                        Products are being fetched. Please wait...
                    </div>
                );
                break;
            case 'LOADED_PRODUCT_DETAILS':
                el = (
                    <div className="row">
                        <div class="col-12 my-4">
                            <h1>{this.state.product.name}</h1>
                            <hr />
                        </div>
                        <div className="col-4">
                            <img src={this.state.product.imageUrl} alt={this.state.product.name} className="img-fluid" />
                        </div>
                        <div class="col-8">
                            <p style={{ fontSize: '1.5em' }}>
                                {this.state.product.description}
                            </p>
                            <section>
                                <div>
                                    Rating: {this.state.product.starRating} / 5
                                </div>
                                <div>
                                    Price: ${this.state.product.price}
                                </div>
                                <button className="btn btn-primary">
                                    Buy
                                </button>
                            </section>
                        </div>
                        <div class="col-12">
                            <Reviews reviews={this.state.product.reviews} />
                        </div>
                        <div class="col-12">
                            <AddReview id={this.state.product.id} />
                        </div>
                    </div>
                );
                break;
            case 'ERROR_LOADING_PRODUCT_DETAILS':
                el = (
                    <div className="alert alert-danger">
                        <h4>Unable to fetch product details</h4>
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
                {el}
            </div>
        );
    }

    componentDidMount() {
        ProductsService.getProductDetailsWithReviews( this.props.match.params.id )
            .then(product => {
                this.setState({
                    product: product,
                    status: 'LOADED_PRODUCT_DETAILS'
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: 'ERROR_LOADING_PRODUCT_DETAILS'
                });
            });
    }
}
 
export default ProductDetail;