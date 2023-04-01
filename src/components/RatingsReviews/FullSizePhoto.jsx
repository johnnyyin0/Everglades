import React, { useState } from 'react';

export default function FullSizePhoto({ src, setPhoto, delButton,  setShowButton, setDelButton, form, setForm}) {

  setShowButton = setShowButton || (() => {})
  setForm = setForm || (() => {})
  form = form || {}

  const handleDelete = (evt) => {
    if (form.photos.length === 1) {
      setForm({...form, photos:[]});
    } else {
      let currentPhotos = form.photos.slice();
      let thisIndex = currentPhotos.indexOf(src);
      currentPhotos.splice(thisIndex, 1);
      setShowButton(true);
      setForm({...form, photos: currentPhotos});
    }
    document.getElementById('fullsize-photo-modal').checked = true
    setDelButton(false)
  }

  return (
      <div className="h-min border-0">
        <input type="checkbox" id="fullsize-photo-modal" className="modal-toggle" />
          <div className="modal p-5 border-0">
            <div className="modal-box max-w-none max-h-full h-min w-max p-0 m-0 border-0 scrollbar-hide overflow-x-auto ">
          <label htmlFor="fullsize-photo-modal" className="">
        {delButton && <button className="btn btn-xs btn-error absolute top-3 right-3" onClick={handleDelete}>
        REMOVE
      </button>}
          <img src={src} alt="Review Photo" className="rounded-lg review-photo" />
          </label>
            </div>
          </div>
      </div>

  )
}