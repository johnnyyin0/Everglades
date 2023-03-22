import React, { useState, useEffect } from 'react'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import axios from 'axios'

export default function ReviewsList({ id, setPhoto }) {

  const [sort, setSort] = useState('relevant');
  const [allReviews, setAllReviews] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);
  const [nextTwo, setNextTwo] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {

    let url = `http://localhost:3000/reviews/${id}/${sort}`;
    axios.get(url)
      .then(res => {
        setAllReviews(res.data.results)
        setShownReviews(res.data.results.slice(0, 2))
        setNextTwo(res.data.results.slice(2, 4))
        if(nextTwo.length < 1){
          setShowMore(false);
        }
      })
      .catch(err => console.log(err))
  }, [sort])

  const handleMoreReviews = (evt) => {
    let showReviews = shownReviews.slice();
    showReviews.concat(nextTwo);
    setShownReviews(showReviews);
  }

  return (
    <section className="flex-column w-full border-2 max-h-screen">
      <h3 className="mx-10 mt-20 pb-4">{allReviews.length} reviews, sorted by {<SortDropDown sort={sort} setSort={setSort} />}
      </h3>
      <div>
        {shownReviews.map(review => (  <ReviewTile setPhoto={setPhoto} review={review} />)
        )}
      </div>
      <div className="flex justify-start pt-5 pb-20">
        {showMore && <button className="btn mr-10" onClick={handleMoreReviews}>More Reviews</button>}
        <label htmlFor="new-review-modal" className="btn">Add Review</label>
      </div>
    </section>
  )
}