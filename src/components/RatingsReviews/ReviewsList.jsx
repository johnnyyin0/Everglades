import React from 'react'
import ReviewTile from './ReviewTile.jsx'

export default function ReviewsList(props) {

  return (
    <section className="flex-column basis-8/12 border-2">
      <div>Reviews List</div>
      <ReviewTile />
      <button>More Reviews</button>
      <label htmlFor="new-review-modal" className="btn">Add Review</label>
    </section>
  )
}