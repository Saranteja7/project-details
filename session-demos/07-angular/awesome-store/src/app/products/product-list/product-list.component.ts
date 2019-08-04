import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public products;
    public errorFetchingProducts;

    constructor( private productsService : ProductsService ) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe(
            ( products ) => {
                this.products = products;
            },
            ( error ) => {
                this.errorFetchingProducts = error;
            }
        );
    }
}