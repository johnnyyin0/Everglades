import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'
import PhotoUploader from './PhotoUploader.jsx'
import ReviewPhoto from './ReviewPhoto.jsx'


export default function NewReviewModal({ id }) {

  const [productName, setProductName] = useState('')
  const [reviewMeta, setReviewMeta] = useState({})
  const [stars, setStars] = useState("0")
  const [recommended, setRecommended] = useState(null)
  const [charRatings, setCharRatings] = useState({})
  const [charsFilled, setCharsFilled] = useState(false)
  const [reviewSummary, setReviewSummary] = useState('')
  const [reviewBody, setReviewBody] = useState('')
  const [reqRemaining, setReqRemaining] = useState('Minimum required characters left: 50')
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [badSubmission, setBadSubmission] = useState({})


  useEffect(() => {
    axios.get(`http://localhost:3000/meta/${id}`)
    .then(res => setReviewMeta(res.data))
    .catch(err => console.log(err));

    axios.get(`http://localhost:3000/product/${id}`)
    .then(res => setProductName(res.data.name))
    .catch(err => console.log(err));

  }, [id])

  const handleSubmit = (evt) => {
    if (stars !== "0" &&
    recommended !== null &&
    charsFilled &&
    reqRemaining === 'Minimum reached' &&
    nickname &&
    email.indexOf('@' > 0)){
      setBadSubmission({});
      handleExit()
      let payload = {
        product_id: id,
        rating: parseInt(stars),
        summary: reviewSummary,
        body: reviewBody,
        recommend: recommended,
        name: nickname,
        email: email,
        photos: photos,
        characteristics: charRatings
      }
      let options = {
        url: "http://localhost:3000/review",
        data: payload,
        method: 'post'
      }
      axios(options)
      .then(res => {
        console.log(res.data)
        setSort('relevant')
      })
      .catch(err => console.log(err.data))
    } else {
      handleIncompleteForm()
    }
  }

  const handleIncompleteForm = (evt) => {
    const stillRequired = {}
    if (stars === '0'){
      stillRequired.stars = true
    }
    if (recommended === null) {
      stillRequired.recommended = true
    }
    if (!charsFilled) {
      stillRequired.charRatings = true
    }
    if (reqRemaining !== 'Minimum reached') {
      stillRequired.bodyLength = true
    }
    if (!nickname) {
      stillRequired.nickname = true
    }
    if (email.indexOf('@') < 1) {
      stillRequired.email = true
    }
    setBadSubmission(stillRequired)
  }
  //mandatory: ovarall rating, recommendation, characteristics, body (not summary), nickname, email

  const handleRecommend = (evt) => {
    setRecommended(evt.target.value === 'yes' ? true : false);
  }

  const handleSummaryChange = (evt) => {
    setReviewSummary(evt.target.value);
  }

  const handleBodyChange = (evt) => {
    setReviewBody(evt.target.value);
    if (evt.target.value.length < 50) {
      let reqString = `Minimum required characters left: ${50 - evt.target.value.length}`
      setReqRemaining(reqString);
    } else {
      setReqRemaining('Minimum reached')
    }
  }

  const handleNickname = (evt) => {
    setNickname(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handleExit = (evt) => {
    document.getElementById('new-review-modal').checked = true ? false : true
  }


  return (
    <div className="static" title="new-review-modal">
      <input type="checkbox" id="new-review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-full">
        <label className="btn btn-circle btn-xs btn-ghost absolute top-3 right-3"  htmlFor="new-review-modal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
        <div className="text-3xl text-center">Write Your Review</div>
          <div className="text-center pb-4 pt-2">About the {productName}</div>
          <div className={`${badSubmission.stars && stars === "0" ? 'text-error' : ''}`}>
            <div className="pb-2 text-xl">Overall Rating:</div>
            <StarsRater stars={stars} setStars={setStars} />
          </div>
          <div className={`py-3 ${badSubmission.recommended && recommended === null ? 'text-error' : ''}`}>
            <span className="py-2 pr-7">Do you recommend this product?</span>
            <input type="radio" name="radio-1" id="yes" value="yes" onClick={handleRecommend}/>
            <label className="pr-5 pl-2">Yes</label>
            <input type="radio" name="radio-1" id="no" value="no" onClick={handleRecommend}/>
            <label className="pl-2">No</label>
          </div>
          <div className={`bg-slate-200 dark:bg-zinc-700 px-2 ${badSubmission.charRatings && !charsFilled ? 'border-2 border-error' : ''}`}>
            <CharacteristicReview chars={reviewMeta.characteristics} setCharRatings={setCharRatings} charRatings={charRatings} setCharsFilled={setCharsFilled} />
          </div>
          <div className="form-control w-full">
            <label className="label pt-5 w-full pb-0">
              <span className="text-xl w-full">Review summary:</span>
            </label>
            <input type="text" className="input input-bordered w-full" placeholder="Example: Pest purchase ever!" onChange={handleSummaryChange} maxLength={60} />
            <label className="label pt-5 pb-0">
              <span className="text-xl">Review body:</span>
            </label>
            <textarea className={`textarea ${badSubmission.bodyLength && reqRemaining !== 'Minimum reached' ? 'textarea-error' : 'textarea-bordered'}`} placeholder="Why did you like this product or not?" onChange={handleBodyChange}></textarea>
            <label className="label pt-0 pb-5">
              <span className={`label-text-alt ${badSubmission.bodyLength && reqRemaining !== 'Minimum reached' ? 'text-error' : ''}`} >{reqRemaining}</span>
            </label>
            {photo && <ReviewPhoto src={photo} setPhoto={setPhoto} photos={photos} setPhotos={setPhotos} setShowButton={setShowButton} />}
            <div>
              <PhotoUploader photos={photos} setPhotos={setPhotos} setPhoto={setPhoto} showButton={showButton} setShowButton={setShowButton} />
            </div>
            <div>
              <label className="label pb-0 pt-5">
                <span className="label">What is your nickname?</span>
              </label>
              <input type="text" placeholder="Example: jackson11!" className={`input w-full max-w-xs ${ badSubmission.nickname && !nickname ? 'input-error' : 'input-bordered'}`} onChange={handleNickname} />
              <label className="label pt-0 pb-0">
              <span className="label-text-alt">For privacy reasons, do not use your full name or email address</span>
            </label>
              <label className="label pb-0 pt-5">
                <span className="w-full">What is your email?</span>
              </label>
              <input type="text" placeholder="Example: jackson11@email.com" className={`input w-full max-w-xs ${ badSubmission.email && email.indexOf('@') < 1 ? 'input-error' : 'input-bordered'}`} onChange={handleEmail} />
              <label className="label pt-0 pb-0">
              <span className="label-text-alt" >For authentication reasons, you will not be emailed</span>
            </label>
              <div className="pt-5 flex justify-between">
                <label className="btn" onClick={handleSubmit}>Submit Review</label>
                <label className="btn btn-error" onClick={handleExit}>Cancel</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}