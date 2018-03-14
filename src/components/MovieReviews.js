import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
       {reviews.map(review => {
          return  (<div className="review">
                    <h3>{review.display_title} by {review.byline}</h3>
                    <h4>{review.headline}</h4>
                    <a href={review.link.url} target="_BLANK">{review.link.suggested_link_text}</a>
                  </div>)
        })}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
