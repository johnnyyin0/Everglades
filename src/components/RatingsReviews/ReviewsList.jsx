import React, { useState, useEffect } from 'react'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import { getAllReviews } from './reviewsapi.js'

export default function ReviewsList({ id, setPhoto, shownReviews, setShownReviews, allReviews, setAllReviews, sort, setSort }) {


  const [restReviews, setRestReviews] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    getAllReviews(id, sort)
      .then(res => {
        setAllReviews(res.data.results)
        setShownReviews(res.data.results.slice(0, 2))
        setRestReviews(res.data.results.slice(2))
        if (res.data.results.slice(2).length === 0) {
          setShowMore(false)
        } else {
          setShowMore(true)
        }
      })
      .catch(err => console.log(err))
  }, [sort])

  useEffect(() => {
    let reviewsToParse = allReviews.slice();
    let firstTwo = reviewsToParse.slice(0, 2)
    setShownReviews(firstTwo)
    setRestReviews(reviewsToParse.slice(2))
  }, [allReviews])

  const handleMoreReviews = (evt) => {
    let showReviews = shownReviews.slice();
    let nextTwo = restReviews.slice(0, 2)
    showReviews = showReviews.concat(nextTwo);
    setShownReviews(showReviews);
    setRestReviews(restReviews.slice(2))
    if (restReviews.slice(2).length === 0)
      setShowMore(false)
  }

  return (
    <section className="flex-column w-full" title="reviews-list">
      <h3 className="mx-10 pt-10 pb-4">{allReviews.length} reviews, sorted by {<SortDropDown sort={sort} setSort={setSort} />}
      </h3>
      <div className="max-h-screen overflow-y-scroll">
        {shownReviews.map(review => (<ReviewTile setPhoto={setPhoto} review={review} key={review.review_id}/>)
        )}
        <div className="flex justify-start pt-5 pb-20 pl-5">
          {showMore && <button className="btn mr-10" onClick={handleMoreReviews}>More Reviews</button>}
          <label htmlFor="new-review-modal" className="btn">Add Review</label>
        </div>
      </div>
    </section>
  )
}