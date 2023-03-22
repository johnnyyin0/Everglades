import React, { useState, useEffect } from 'react'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import axios from 'axios'

export default function ReviewsList({ id, setPhoto }) {

  const [sort, setSort] = useState('relevant');
  const [allReviews, setAllReviews] = useState([]);
  const [nextTwo, setNextTwo] = useState([])

  useEffect(() => {

    let url = `http://localhost:3000/reviews/${id}/${sort}`;
    axios.get(url)
      .then(res => {
        setAllReviews(res.data.results)
        setNextTwo(res.data.results.slice(0, 2))
      })
      .catch(err => console.log(err))
  }, [sort])

  const handleMoreReviews = (evt) => {

  }

  return (
    <section className="flex-column w-full border-2">
      <h3 className="mx-10 mt-20 pb-4">{allReviews.length} reviews, sorted by {<SortDropDown sort={sort} setSort={setSort} />}
      </h3>
      <div>
        {nextTwo.map(review => (  <ReviewTile setPhoto={setPhoto} review={review} />)
        )}
      </div>
      <button className="btn" onClick={handleMoreReviews}>More Reviews</button>
      <label htmlFor="new-review-modal" className="btn">Add Review</label>
    </section>
  )
}