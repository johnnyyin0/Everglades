import React from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'

export default function RatingsReviews(props) {
  return (
    <div className="flex flex-row basis-full">
      <Sidebar />
      <ReviewsList />
    </div>
  )
}