import React from 'react';

const Reviews = ( { reviews } ) => {
    return ( 
        <React.Fragment>
            <h3 className="my-4">Reviews for this product</h3>
            <hr />
            <ul class="list-group">
                {
                    reviews.map( review => (
                        <li class="list-group-item">
                            <p>{review.reviewer}</p>
                            <p>{review.starRating}</p>
                            <p>{review.title}</p>
                            <p>{review.text}</p>
                        </li>
                    ))
                }
            </ul>
        </React.Fragment>
    )
}
 
export default Reviews;