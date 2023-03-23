import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import CharacteristicReview from './CharacteristicReview.jsx'
import StarsRater from './StarsRater.jsx'
import PhotoUploader from './PhotoUploader.jsx'
import ReviewPhoto from './ReviewPhoto.jsx'

export default function NewNewReview({ newReview, setNewReview }) {

  const cancelButtonRef = useRef(null)
  const [productName, setProductName] = useState('')
  const [reviewMeta, setReviewMeta] = useState({})
  const [stars, setStars] = useState("")
  const [recommended, setRecommended] = useState(null)
  const [charRatings, setCharRatings] = useState({})
  const [reviewSummary, setReviewSummary] = useState('')
  const [reviewBody, setReviewBody] = useState('')
  const [reqRemaining, setReqRemaining] = useState('Minimum required characters left: 50')
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  //there's gotta be a better way to get the current product ID
  let productId = window.location.pathname.slice(1) || 37311;

  useEffect(() => {
    axios.get(`http://localhost:3000/meta/${productId}`)
      .then(res => setReviewMeta(res.data))
      .catch(err => console.log(err));

    axios.get(`http://localhost:3000/product/${productId}`)
      .then(res => setProductName(res.data.name))
      .catch(err => console.log(err));
  }, [])

  const handleClose = () => {

  }

  const handleSubmit = (evt) => {
    if (stars &&
      recommended !== null &&
      Object.keys(charRatings).length === Object.keys(reviewMeta.characteristics).length &&
      reqRemaining === 'Minimum reached' &&
      nickname &&
      email.indexOf('@' > 0)) {
      let payload = {
        product_id: productId,
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
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data))
    } else {
      handleIncompleteForm()
    }
  }

  const handleIncompleteForm = (evt) => {

  }

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

  const handleNickname = (evt) => {
    setNickname(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

//Johnny's className=question-answer-modal-overlay

  return (
    <div>
{/* {newReview &&  <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-1000'>
      <div className='relative overflow-y-auto p-20 bg-white '>
      <div className="text-3xl text-center">Write Your Review</div>
            <div className="text-center pb-4 pt-2">About the {productName}</div>
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
              <CharacteristicReview chars={reviewMeta.characteristics} setCharRatings={setCharRatings} charRatings={charRatings} />
            </div>
            <div className="form-control w-full">
              <label className="label pt-5 w-full pb-0">
                <span className="text-xl w-full">Review summary:</span>
              </label>
              <input type="text" className="input input-bordered w-full" placeholder="Example: Pest purchase ever!" onChange={handleSummaryChange} />
              <label className="label pt-5 pb-0">
                <span className="text-xl">Review body:</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Why did you like this product or not?" onChange={handleBodyChange}></textarea>
              <label className="label pt-0 pb-5">
                <span className="label-text-alt" >{reqRemaining}</span>
              </label>
              {photo && <div className="absolute">
                <ReviewPhoto src={photo} setPhoto={setPhoto} photos={photos} setPhotos={setPhotos} setShowButton={setShowButton} />
              </div>}
              <div>
                <PhotoUploader photos={photos} setPhotos={setPhotos} setPhoto={setPhoto} showButton={showButton} setShowButton={setShowButton} />
              </div>
              <div>
                <label className="label pb-0 pt-5">
                  <span className="label">What is your nickname?</span>
                </label>
                <input type="text" placeholder="Example: jackson11!" className="input input-bordered w-full max-w-xs" onChange={handleNickname} />
                <label className="label pb-0 pt-5">
                  <span className="w-full">What is your email?</span>
                </label>
                <input type="text" placeholder="Example: jackson11@email.com" className="input input-bordered w-full max-w-xs" onChange={handleEmail} />
                <div className="pt-5 flex justify-between">
                  <label className="btn" htmlFor="new-review-modal" onClick={handleSubmit}>Submit Review</label>
                  <label htmlFor="new-review-modal" className="btn">Cancel</label>
                </div>
              </div>
              </div>
      </div>
      </div>} */}
    </div>
  )
}