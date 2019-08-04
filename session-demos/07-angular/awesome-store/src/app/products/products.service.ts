import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IReview from './Review';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor( private http: HttpClient ) { 
    }

    getProducts() {
        // the returned object is an "Observable"
        return this.http.get( 'https://awesome-store-server.herokuapp.com/products' );
    }

    getProductById( id ) {
        return this.http.get( `https://awesome-store-server.herokuapp.com/products/${id}` );
    }

    postReview( id : number | string, review : IReview ) {
        return this.http.post( 
            `https://awesome-store-server.herokuapp.com/products/${id}/reviews`,
            review,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }
}
