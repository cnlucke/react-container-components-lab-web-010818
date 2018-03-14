import React from 'react';
import MovieReviews from './MovieReviews';
import uuid from "uuid";

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + '&query=';

//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews = () => {
    console.log("fetching with searchTerm...")
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(json => {
      this.setState({ reviews: json.results, searchTerm: '' })
    })
  }

  handleInput = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchReviews()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="search"
                 placeholder="Search For Reviews"
                 onChange={this.handleInput}
                 value={this.state.search}/>
          <input type="submit" value="Search" />
        </form>
        <div className="movie-list">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
