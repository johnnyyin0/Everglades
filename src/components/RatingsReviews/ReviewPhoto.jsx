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
      setPhotos(currentPhotos);
    }
  }

  return (
    <div onClick={handleClick} className="absolute object-cover">
      <figure>
        <button className="btn btn-xs btn-error absolute top-3 right-3" onClick={handleDelete}>
          REMOVE
        </button>
        <img src={src} alt="New Review Photo" /></figure>
    </div>
  )
}