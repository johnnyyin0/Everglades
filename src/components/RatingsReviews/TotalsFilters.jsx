import React from 'react'
import _ from 'underscore'
import StarAvgSlider from './StarAvgSlider'
export default function TotalsFilters({ ratings, totalRatings }) {

  return (
    <div className="mb-5">
      {ratings && _.map(ratings, (votes, star) =>
        <StarAvgSlider star={star} avg={parseInt(votes)/totalRatings} votes={votes} />).reverse()}
    </div>
  )
}