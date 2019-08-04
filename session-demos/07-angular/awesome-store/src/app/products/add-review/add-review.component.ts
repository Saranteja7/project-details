import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IReview from '../Review';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
    @Input()
    public productId: number | string;

    @Output()
    public reviewAdded: EventEmitter<IReview> = new EventEmitter<IReview>();
    
    public review : IReview = {
        reviewer: '',
        starRating: 5,
        title: '',
        text: ''
    };

    constructor( private productsService: ProductsService ) {
    }

    ngOnInit() {
    }

    postReview( event ) {
        event.preventDefault(); // form submission is prevented
        console.log( this.review );

        this.productsService.postReview( this.productId, this.review ).subscribe(
            ( review : IReview ) => {
                alert( 'Thanks for reviewing this product. Your review has been added successfully.' );
                this.reviewAdded.emit( review );
            },
            ( error ) => {
                alert( 'Something went wrong. We were unable to add your review.' );
            }
        );
    }
}
