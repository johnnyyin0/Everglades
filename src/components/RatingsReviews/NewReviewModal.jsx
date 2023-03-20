import React, { useState } from 'react'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'

export default function NewReviewModal(props) {

  const [stars, setStars] = useState("0")
  const [recommended, setRecommended] = useState(false)

  const handleRecommend = (evt) => {
    setRecommended(evt.target.value);
  }

  return (
    <div>
      <input type="checkbox" id="new-review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-full">
          <div className="pb-2">Overall Rating:</div>
          <StarsRater stars={stars} setStars={setStars} />
          <div className="py-3">
            <span className="py-2 pr-7">Do you recommend this product?</span>
            <input type="radio" name="radio-1" id="yes" value="yes" />
            <label for="yes" className="pr-5 pl-2">Yes</label>
            <input type="radio" name="radio-1" id="no" value="no" />
            <label for="no" className="pl-2">No</label>
          </div>
          <CharacteristicReview />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Review summary:</span>
            </label>
            <input type="text" placeholder="Example: Pest purchase ever!" className="input input-bordered w-full max-w-xs " />
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