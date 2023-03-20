import React, { useState } from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'

export default function RatingsReviews(props) {
  const [starFilter, setStarFilter] = useState('');


  return (
    <div className="flex flex-row basis-full">
      <Sidebar filter={setStarFilter} setFilter={setStarFilter}/>
      <ReviewsList />
    </div>
  )
}