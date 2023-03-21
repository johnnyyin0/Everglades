import React, { useState } from 'react'
import axios from 'axios'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'
import PhotoUploader from './PhotoUploader.jsx'
import ReviewPhoto from './ReviewPhoto.jsx'

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
  const [charRatings, setCharRatings] = useState({})
  const [reviewSummary, setReviewSummary] = useState('')
  const [reviewBody, setReviewBody] = useState('')
  const [reqRemaining, setReqRemaining] = useState('Minimum required characters left: 50')
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState('')

  const handleRecommend = (evt) => {
    setRecommended(evt.target.value);
  }

  const handleSummaryChange = (evt) => {
    setReviewSummary(evt.target.value);
  }

  const handleBodyChange = (evt) => {
    setReviewBody(evt.target.value);
    if (reviewBody.length < 50) {
      let reqString = `Minimum required characters left: ${50 - evt.target.value.length}`
      setReqRemaining(reqString);
    } else {
      setReqRemaining('Minimum reached')
    }
  }

  //there's gotta be a better way to get the current product ID
  let productId = window.location.pathname.slice(1) || 37311;


  return (
    <div className="static">
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
          <div className="bg-slate-200 px-2">
            <CharacteristicReview characteristics={reviewMeta.characteristics} setCharRatings={setCharRatings} charRatings={charRatings} />
          </div>
          <div className="form-control w-full">
            <label className="label pt-5">
              <span className="label-text text-xl">Review summary:</span>
            </label>
            <input type="text" className="input input-bordered w-full" placeholder="Example: Pest purchase ever!" onChange={handleSummaryChange} />
            <label className="label pt-5">
              <span className="label-text text-xl">Review body:</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Why did you like this product or not?" onChange={handleBodyChange}></textarea>
            <label className="label">
              <span className="label-text-alt">{reqRemaining}</span>
            </label>
              { photo && <div className="absolute">
                <ReviewPhoto src={photo} setPhoto={setPhoto} />
              </div>}
            <div>
              <PhotoUploader photos={photos} setPhotos={setPhotos} setPhoto ={setPhoto}/>
            </div>
            <div>
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