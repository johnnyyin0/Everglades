import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'
import FullSizePhoto from './FullSizePhoto.jsx'
import NewReviewModal from './NewReviewModal.jsx'

export default function RatingsReviews(props) {
  const [showPhoto, setShowPhoto] = useState(false)
  const [photo, setPhoto] = useState('');
  const [delButton, setDelButton] = useState(false)
  const [allReviews, setAllReviews] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [form, setForm] = useState({
    charRatings:{},
    stars: "0",
    email: '',
    photos: []
  })

  let productId = window.location.pathname.slice(1) || 37311;

  useEffect(() => {
    photo ? setShowPhoto(true) : setShowPhoto(false)
  }, [photo]);

  return (
    <div className="flex relative" title="ratings-reviews-module">
      <NewReviewModal setSort={setSort} id={productId} photo={photo} setPhoto={setPhoto} form={form} setForm={setForm} setDelButton={setDelButton}/>
     <FullSizePhoto src={photo} setPhoto={setPhoto} form={form} setForm={setForm} delButton={delButton} setDelButton={setDelButton}/>
      <Sidebar id={productId} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews}/>
      <ReviewsList setPhoto={setPhoto} id={productId} shownReviews={shownReviews} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews} sort={sort} setSort={setSort} />
    </div>
  )
}