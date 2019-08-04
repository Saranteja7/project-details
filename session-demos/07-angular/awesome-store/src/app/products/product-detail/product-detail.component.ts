import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import IReview from '../Review';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    public product;
    public productId;
    public errorFetchingProduct;

    constructor(
        private productsService : ProductsService,
        private activatedRoute : ActivatedRoute
    ) { }

    ngOnInit() {
        this.productId = this.activatedRoute.snapshot.paramMap.get( 'id' );

        this.productsService.getProductById( this.productId ).subscribe(
            ( product ) => {
                this.product = product;
            },
            ( errorFetchingProduct ) => {
                this.errorFetchingProduct = errorFetchingProduct;
            }
        );
    }

    handleReviewAdded( review : IReview ) {
        alert( review.id );
    }
}