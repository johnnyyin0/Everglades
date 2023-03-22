import React, { useState, useEffect } from 'react'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import axios from 'axios'

export default function ReviewsList(props) {

  const [sort, setSort] = useState('relevant');
  const [allReviews, setAllReviews] = useState([]);
  const [nextTwo, setNextTwo] = useState([])

  useEffect(() => {
    console.log(window.location.pathname.slice(1), 'item')

    let url = "http://localhost:3000/reviews";
    let body = {
        "product_id": window.location.pathname.slice(1) || 37311,
        "sort": sort
    };
    axios.post(url, body)
      .then(res => {
        setAllReviews(res.data.results)
        setNextTwo(res.data.results.slice(0, 2))
        console.log(nextTwo, 'nextTwo')
        console.log(allReviews)
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
        {nextTwo.map(review => (  <ReviewTile setPhoto={props.setPhoto} review={review} />)
        )}
      </div>
      <button className="btn" onClick={handleMoreReviews}>More Reviews</button>
      <label htmlFor="new-review-modal" className="btn">Add Review</label>
    </section>
  )
}