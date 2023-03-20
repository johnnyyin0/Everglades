import React from 'react'
import StarsWidget from './StarsWidget.jsx'

export default function MainAverage({ avgReview, pctRecommended }) {

  return (
    <div className="flex pb-5">
      <div className="stats overflow-hidden">
        <div className="stat">
          <div className="stat-title">RATINGS & REVIEWS</div>
          <div className="stat-value text-7xl w-fit">{avgReview}</div>
          <div className="stat-figure -ml-28 w-max items-start">
            <StarsWidget rating={avgReview}/>
          </div>
          <div className="stat-desc mt-3">{pctRecommended}% of reviews recommend this product</div>
        </div>
      </div>
    </div>
  )
}