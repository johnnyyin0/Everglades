import React, { useState } from 'react'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'

export default function ReviewsList(props) {

  const[sort, setSort] = useState('relevance');

  return (
    <section className="flex-column basis-8/12 border-2">
      <h3 className="mx-10 mt-20">### reviews, sorted by {<SortDropDown sort={sort} setSort={setSort}/>}
</h3>
      <ReviewTile />
      <button>More Reviews</button>
      <label htmlFor="new-review-modal" className="btn">Add Review</label>
    </section>
  )
}