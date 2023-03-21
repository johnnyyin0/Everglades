import React, { useState } from 'react';

export default function ReviewPhoto({ src, setPhoto, photos, setPhotos, setShowButton }) {

  const handleClick = (evt) => {
    setPhoto('')
  }

  const handleDelete = (evt) => {
    if (photos.length === 1) {
      setPhotos([]);
    } else {
      let currentPhotos = photos.slice();
      let thisIndex = currentPhotos.indexOf(src);
      currentPhotos.splice(thisIndex, 1);
      setShowButton(true);
      console.log('show that button!')
      setPhotos(currentPhotos);
    }
  }

  return (
    <div onClick={handleClick}>
      <figure className="relative">
        <button className="btn btn-circle btn-xs absolute top-3 right-3"  onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <img src={src} alt="New Review Photo" /></figure>

    </div>
  )
}