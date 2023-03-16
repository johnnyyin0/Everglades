import React from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'

export default function RatingsReviews(props) {
  return (
    <div>
      <div>Ratings and Reviews</div>
      <ReviewsList />
      <Sidebar />
      <button>More Reviews</button>
      <a href="#new-review-modal" className="btn">Add Review</a>
    </div>
  )
}