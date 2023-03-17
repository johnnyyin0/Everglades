import React from 'react';
import {useState} from 'react';

const ProductImage = ({photo}) => {

  return (
    <>
    <img className="rounded border bg-white p-1" src={photo} alt="image"></img>
    </>
  )
}

export default ProductImage;