import React, { useState } from 'react';

export default function ReviewPhoto({ src, setPhoto, photos, setForm, setShowButton }) {

  const handleClick = (evt) => {
    setPhoto('')
  }

  const handleDelete = (evt) => {
    if (photos.length === 1) {
      setForm({...form, photos:[]});
    } else {
      let currentPhotos = photos.slice();
      let thisIndex = currentPhotos.indexOf(src);
      currentPhotos.splice(thisIndex, 1);
      setShowButton(true);
      setForm({...form, photos: currentPhotos});
    }
  }

  return (
    <div onClick={handleClick} className="fixed object-cover z-10000" title="new-review-photo">
      <figure>
        <button className="btn btn-xs btn-error absolute top-3 right-3" onClick={handleDelete}>
          REMOVE
        </button>
        <img src={src} alt="New Review Photo" /></figure>
    </div>
  )
}