import React, { useState } from 'react';

export default function FullSizePhoto({ src, setPhoto }) {

  const handleClick = (evt) => {
    setPhoto('')
  }

  return (
    <div  onClick={handleClick} title="fullsize-review-photo" className="bg-base-100 shadow-x1 absolute inset-0 z-20 w-max h-max rounded-lg m-auto backdrop-blur-md">
      <figure><img src={src} alt="Review Photo" className="rounded-lg" /></figure>
    </div>
  )
}