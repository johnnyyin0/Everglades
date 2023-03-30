import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import Sidebar from './Sidebar.jsx'
import FullSizePhoto from './FullSizePhoto.jsx'
import NewReviewModal from './NewReviewModal.jsx'

export default function RatingsReviews(props) {
  const [showPhoto, setShowPhoto] = useState(false)
  const [photo, setPhoto] = useState('');
  const [allReviews, setAllReviews] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);
  const [sort, setSort] = useState('relevant');


  let productId = window.location.pathname.slice(1) || 37311;

  useEffect(() => {
    photo ? setShowPhoto(true) : setShowPhoto(false)
  }, [photo]);

  return (
    <div className="flex relative" title="ratings-reviews-module">
      <NewReviewModal setSort={setSort} id={productId}/>
     <FullSizePhoto src={photo} setPhoto={setPhoto} />
      <Sidebar id={productId} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews}/>
      <ReviewsList setPhoto={setPhoto} id={productId} shownReviews={shownReviews} setShownReviews={setShownReviews} allReviews={allReviews} setAllReviews={setAllReviews} sort={sort} setSort={setSort} />
    </div>
  )
}