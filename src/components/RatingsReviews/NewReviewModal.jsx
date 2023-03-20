import React, { useState } from 'react'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'

export default function NewReviewModal(props) {

  const [stars, setStars] = useState("0")
  const [recommended, setRecommended] = useState(false)

  return (
    <div>
      <input type="checkbox" id="new-review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="pb-2">Overall Rating:</div>
          <StarsRater stars={stars} setStars={setStars} />
          <div className="py-2">Do you recommend this product?</div>
          <input type="radio" value="yes"/>
          <input type="radio" value="no"/>
          <CharacteristicReview />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Review summary:</span>
            </label>
            <input type="text" placeholder="Example: Pest purchase ever!" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text">Review body:</span>
            </label>
            <input type="text" placeholder="Why did you like this project or not?" className="textarea input-bordered w-full max-w-xs" />
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
              <button className="btn">Submit Review</button>
              <label htmlFor="new-review-modal" className="btn">Close modal</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}