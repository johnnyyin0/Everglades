import React, { useState, useEffect } from 'react'
import { getMeta } from './reviewsapi.js'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar({ id, allReviews, setAllReviews }) {

  const [starFilter, setStarFilter] = useState('')
  const [reviewMeta, setReviewMeta] = useState(null)
  const [avgReview, setAvgReview] = useState(0)
  const [pctRecommended, setPctRecommended] = useState(0)
  const [ratingsCount, setRatingsCount] = useState(0)

  useEffect(() => {
    getMeta(id)
      .then(res => {
        let meta = res.data
        let avgDividend = 0
        let totalRatings = 0
        setReviewMeta(meta)
        for (let key in meta.ratings) {
          totalRatings += parseInt(meta.ratings[key])
          avgDividend += parseInt(key) * parseInt(meta.ratings[key])
        }
        setAvgReview((avgDividend/totalRatings).toFixed(1))
        setRatingsCount(totalRatings)
        setPctRecommended(
          Math.round(
          (parseInt(meta.recommended.true) /
          (parseInt(meta.recommended.true) + parseInt(meta.recommended.false)))
          * 100
          )
        )
      })
      .catch(err => console.log(err))
  }, [id])


  return (

    <div className="w-max h-max ml-5 mt-5 pb-16" title='ratings-reviews-sidebar'>
      {reviewMeta && <div>
        <MainAverage avgReview={avgReview} pctRecommended={pctRecommended}/>
        <TotalsFilters setFilter={setStarFilter} ratings={reviewMeta.ratings} totalRatings={ratingsCount} setAllReviews={setAllReviews} allReviews={allReviews}/>
        <FitSliders characteristics={reviewMeta.characteristics}/>
      </div>}
    </div>

  )
}