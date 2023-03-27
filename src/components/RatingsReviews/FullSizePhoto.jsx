import React, { useState } from 'react';

export default function FullSizePhoto({ src, setPhoto }) {

  const handleClick = (evt) => {
    setPhoto('')
  }

  return (
    <div  onClick={handleClick} title="fullsize-review-photo">
      <figure><img src={src} alt="Review Photo" /></figure>
    </div>
  )
}