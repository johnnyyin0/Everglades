import React from 'react'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsWidget from './StarsWidget.jsx'

export default function NewReviewModal(props) {

  return (
    <div className="modal" id="new-review-modal">
      <div className="modal-box">
        <div>Overall Rating:</div>
        <StarsWidget />
        <div>Do you recommend this product?</div>
        <input type="checkbox" />
        <input type="checkbox" />
        <CharacteristicReview />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Review summary:</span>
          </label>
          <input type="text" placeholder="Placeholder Goes Here" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Review body:</span>
          </label>
          <input type="text" placeholder="Placeholder Goes Here" className="input input-bordered w-full max-w-xs" />
          <div className="modal-action">
            <button>Upload Photos</button>
            <label className="label">
            <span className="label-text">What is your nickname?</span>
          </label>
          <input type="text" placeholder="Placeholder Goes Here" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input type="text" placeholder="Placeholder Goes Here" className="input input-bordered w-full max-w-xs" />
            <button>Submit Review</button>
            <a href="#" className="btn">Close Modal</a>
          </div>
        </div>
      </div>
    </div>
  )
}