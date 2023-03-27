import React from 'react'
import StarsWidget from './StarsWidget.jsx'

export default function MainAverage({ avgReview, pctRecommended }) {

  return (
    <div className="flex pb-5" title='main-average'>
      <div className="stats overflow-hidden bg-inherit text-inherit dark:bg-zinc-800 dark:text-slate-200 dark:font-bold">
        <div className="stat">
          <div className="stat-title text-inherit">RATINGS & REVIEWS</div>
          <div className="stat-value text-7xl w-fit">{avgReview}</div>
          <div className="stat-figure -ml-28 -mt-6 w-max items-start">
            <StarsWidget rating={avgReview}/>
          </div>
          <div className="stat-desc mt-3 text-inherit">{pctRecommended}% of reviews recommend this product</div>
        </div>
      </div>
    </div>
  )
}