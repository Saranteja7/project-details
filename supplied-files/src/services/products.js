import axios from 'axios';

const ProductsService = {
    baseUrl: 'http://awesome-store-server.herokuapp.com/',
    getProducts() {
        return axios.get( 'https://awesome-store-server.herokuapp.com/products' )
                    .then(response => response.data)
    },
    getProductDetailsWithReviews( id ) {
        return axios.get( `https://awesome-store-server.herokuapp.com/products/${id}?_embed=reviews` )
            .then(response => response.data)
    },
    /** Write postReview() and have it called when review is posted from add review form */
};

export default ProductsService;