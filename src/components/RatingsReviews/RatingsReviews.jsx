import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'
import FullSizePhoto from './FullSizePhoto.jsx'
import NewReviewModal from './NewReviewModal.jsx'

export default function RatingsReviews(props) {
  const [photo, setPhoto] = useState('');
  const [showPhoto, setShowPhoto] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);


  let productId = window.location.pathname.slice(1) || 37311;

  useEffect(() => {
    //
  }, [])

  useEffect(() => {
    photo ? setShowPhoto(true) : setShowPhoto(false)
  }, [photo]);

  return (
    <div className="flex flex-row basis-full relative">
      <NewReviewModal />
      {showPhoto && <div className="card bg-base-100 shadow-x1 absolute z-20"><FullSizePhoto src={photo} setPhoto={setPhoto} /></div>}
      <Sidebar id={productId} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews}/>
      <ReviewsList setPhoto={setPhoto} id={productId} shownReviews={shownReviews} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews} />
    </div>
  )
}