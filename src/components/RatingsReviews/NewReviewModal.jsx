import React, { useState } from 'react'
import axios from 'axios'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'

export default function NewReviewModal(props) {

  let reviewMeta = {
    "product_id": "37311",
    "ratings": {
        "1": "79",
        "2": "46",
        "3": "112",
        "4": "144",
        "5": "355"
    },
    "recommended": {
        "false": "126",
        "true": "610"
    },
    "characteristics": {
        "Fit": {
            "id": 125031,
            "value": "3.0805084745762712"
        },
        "Length": {
            "id": 125032,
            "value": "3.1122661122661123"
        },
        "Comfort": {
            "id": 125033,
            "value": "3.2139737991266376"
        },
        "Quality": {
            "id": 125034,
            "value": "3.2433035714285714"
        }
    }
}

  const [stars, setStars] = useState("0")
  const [recommended, setRecommended] = useState(false)

  const handleRecommend = (evt) => {
    setRecommended(evt.target.value);
  }

  //there's gotta be a better way to get the current product ID
  let productId = window.location.pathname.slice(1) || 37311;


  return (
    <div>
      <input type="checkbox" id="new-review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-full">
          <div className="pb-2 text-xl">Overall Rating:</div>
          <StarsRater stars={stars} setStars={setStars} />
          <div className="py-3">
            <span className="py-2 pr-7">Do you recommend this product?</span>
            <input type="radio" name="radio-1" id="yes" value="yes" />
            <label className="pr-5 pl-2">Yes</label>
            <input type="radio" name="radio-1" id="no" value="no" />
            <label className="pl-2">No</label>
          </div>
          <CharacteristicReview characteristics={reviewMeta.characteristics}/>
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
            </div><div>
              <label className="label">
                <span className="label-text">What is your nickname?</span>
              </label>
              <input type="text" placeholder="Example: jackson11!" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text">What is your email?</span>
              </label>
              <input type="text" placeholder="Example: jackson11@email.com" className="input input-bordered w-full max-w-xs" />
              <button className="btn">Submit Review</button>
              <label htmlFor="new-review-modal" className="btn">Close modal</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}