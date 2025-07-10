import React, { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

function ReviewListPage() {
  const { reviews } = useContext(ReviewContext);
  const location = useLocation();

  return (
    <div className="all-reviews-page">
      <div className="all-reviews-header">
        <h1>Semua Review Pengguna</h1>
        <Link to="/" className="back-button">Kembali ke Home</Link>
      </div>

      <div className="review-list-container">
        {reviews.length > 0 ? (
          reviews.map(review => (
              <div className="review-card" key={review.id}>
                <p>"{review.text}"</p>
                <h4>- {review.name}</h4>
              </div>
          ))
        ) : (
          <p className="no-reviews-message">Belum ada review.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewListPage;
