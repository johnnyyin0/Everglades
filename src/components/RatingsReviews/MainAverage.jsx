import React from 'react'
import StarsWidget from './StarsWidget.jsx'

export default function MainAverage({ avgReview, pctRecommended }) {

  return (
    <div className="flex border-2 flex-row">
      <div className="stats">
        <div className="stat">
          <div className="stat-title">RATINGS & REVIEWS</div>
          <div className="stat-value border-2 text-7xl w-fit">{avgReview}</div>
          <div className="stat-figure border-2 -ml-96 w-auto">
            <StarsWidget rating={avgReview}/>
          </div>
          <div className="stat-desc">{pctRecommended}% of reviews recommend this product</div>
        </div>
      </div>
    </div>
  )
}