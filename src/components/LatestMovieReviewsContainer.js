import React from 'react';
import MovieReviews from './MovieReviews';
import uuid from "uuid";
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    this.fetchReviews()
  }

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
      this.setState({ reviews: json.results })
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <div className="review-list">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
