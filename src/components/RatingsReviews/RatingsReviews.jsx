import React from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'

export default function RatingsReviews(props) {
  return (
    <div>
      <div>Ratings and Reviews</div>
      <ReviewsList />
      <Sidebar />
    </div>
  )
}