import React, { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import { Link } from 'react-router-dom';

function ReviewCarousel() {
  const { reviews } = useContext(ReviewContext);
  const latestReviews = reviews.slice(0, 5);

  if (latestReviews.length === 0) {
    return <p className="no-reviews-message">Belum ada review saat ini.</p>;
  }

  const duplicatedReviews = [...latestReviews, ...latestReviews];

  return (
    <div className="carousel-wrapper">
      <div className="review-carousel-container">
        <div className="review-track">
          {duplicatedReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <p>"{review.text}"</p>
              <h4>- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="more-button-container">
        <Link to='/reviewlist' className="btn-more-reviews">Lihat Semua Review</Link>
      </div>
    </div>
  );
}

export default ReviewCarousel;