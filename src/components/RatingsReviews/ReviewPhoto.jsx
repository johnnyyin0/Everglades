import React, { useState } from 'react';

export default function ReviewPhoto({ src, setPhoto }) {

  const handleClick = (evt) => {
    setPhoto('')
  }

  return (
    <div  onClick={handleClick}>
      <figure><img src={src} alt="New Review Photo" /></figure>
    </div>
  )
}