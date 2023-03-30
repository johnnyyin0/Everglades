import React, { useState } from 'react';

export default function FullSizePhoto({ src, setPhoto }) {

  const handleClick = (evt) => {
    document.body.style.overflow = 'auto'
  }

  return (
      <div className="h-min">
        <input type="checkbox" id="fullsize-photo-modal" className="modal-toggle" />
          <div className="modal p-5">
            <div className="modal-box max-w-none max-h-full h-min w-max p-0 m-0 scrollbar-hide overflow-x-auto ">
          <label htmlFor="fullsize-photo-modal" className="">
          <img src={src} alt="Review Photo" className="rounded-lg review-photo" onClick={handleClick}/>
          </label>
            </div>
          </div>
      </div>

  )
}