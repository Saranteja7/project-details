import React  from 'react';

class AddReview extends React.Component {
    reviewerRef = React.createRef();
    starRatingRef = React.createRef();
    titleRef = React.createRef();
    textRef = React.createRef();

    state = {
        values: {
            reviewer: '',
            starRating: 5,
            title: '',
            text: ''
        },
        errors: {
            reviewer: '',
            starRating: '',
            title: '',
            text: ''
        },
        isValid: false
    }

    postReview = ( event ) => {
        event.preventDefault();
        console.log( this.state.values );
    }

    checkValidity() {
        let isValid = true;
        let reviewerErr = '', starRatingErr = '', titleErr = '', textErr = '';

        const { reviewer, starRating, title, text } = this.state.values;

        if( reviewer === '' ) {
            isValid = false;
            reviewerErr = reviewerErr + 'Your name is required<br />';
        } else {
            reviewerErr = '';
        }

        if( starRating === '' ) {
            isValid = false;
            starRatingErr = starRatingErr + 'You must select a rating<br />';
        } else {
            starRatingErr = '';
        }

        this.setState({
            errors: {
                reviewer: reviewerErr,
                starRating: starRatingErr,
                title: titleErr,
                text: textErr 
            },
            isValid: isValid
        });
    }

    updateValue = ( event ) => {
        this.setState(
            {
                values: {
                    // ...this.state.values,
                    // [event.target.name]: event.target.value
                    reviewer: this.reviewerRef.current.value,
                    starRating: this.starRatingRef.current.value,
                    title: this.reviewerRef.current.value,
                    text: this.titleRef.current.value
                }
            },
            this.checkValidity // this method is called after React actually changes the state
        );
    }

    render() { 
        const { reviewer, starRating, title, text } = this.state.values;
        const { reviewer : reviewerErr, starRating: starRatingErr, title : titleErr, text : textErr } = this.state.errors;

        const errorStyle = {
            color: 'crimson'
        };

        return (
            <React.Fragment>
                <h2 className="mt-5 mb-1">Add a review</h2>
                <hr />
                <form onSubmit={this.postReview}>
                    <div class="form-group">
                        <label for="reviewer">Your name</label>
                        <input type="text" name="reviewer" id="reviewer" class="form-control" placeholder="" aria-describedby="helpName" value={reviewer} onChange={this.updateValue} ref={this.reviewerRef} />
                        {
                            reviewerErr ? (
                                <div style={errorStyle}>
                                    {reviewerErr}
                                </div>
                            ) : (
                                <small id="helpName" class="text-muted">Your name goes in here</small>
                            )
                        }
                    </div>
                    <div class="form-group">
                        <label for="starRating">Rating</label>
                        <select name="starRating" id="starRating" class="form-control" aria-describedby="helpStarRating" value={starRating} onChange={this.updateValue} ref={this.starRatingRef}>
                            <option value="">-- Select rating --</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        {
                            starRatingErr ? (
                                <div style={errorStyle}>
                                    {starRatingErr}
                                </div>
                            ) : (
                                <small id="helpStarRating" class="text-muted">Your rating (1 - lowest, 5 - highest)</small>
                            )
                        }
                    </div>
                    <div class="form-group">
                        <label for="title">Title for your review</label>
                        <input type="text" name="title" id="title" class="form-control" placeholder="" aria-describedby="helpTitle" value={title} onChange={this.updateValue} ref={this.titleRef} />
                        <small id="helpTitle" class="text-muted">A short description for your review</small>
                    </div>
                    <div class="form-group">
                        <label for="text">Your review</label>
                        <textarea name="text" id="text" class="form-control" placeholder="" aria-describedby="helpReview" value={text} onChange={this.updateValue} ref={this.textRef}></textarea>
                        <small id="helpReview" class="text-muted">
                            Your review for the product goes in here...
                        </small>
                    </div>
                    <div class="form-group">
                        <input type="submit" disabled={!this.state.isValid} value="Post review" class="btn btn-primary" />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default AddReview;