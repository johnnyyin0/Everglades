import React from 'react';
import {useState} from 'react';
import ImageGallery from './imageGallery.jsx'

const ProductImage = ({photo, styleSelected, setPhoto}) => {
  return (
    <div className="flex justify-end">
      <div className="col-span-1">
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto}/>
      </div>
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1 col-span-1" />
      : <img className="rounded border bg-white p-1 col-span-1" src={photo} alt="image"></img>
    }
    </div>
  )
}

export default ProductImage;