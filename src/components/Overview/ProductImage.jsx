import React from 'react';
import {useState} from 'react';
import ImageGallery from './imageGallery.jsx'

const ProductImage = ({photo, styleSelected, setPhoto, setFullScreen}) => {
  return (
    <div className="flex justify-end">
      <div className="col-span-1">
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen}/>
      </div>
      <div className="col-span-1 p-1">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      : <img className="rounded border bg-white p-1 object-cover h-[600px] w-[500px]" src={photo} alt="image"></img>
    }
    </div>
    </div>
  )
}

export default ProductImage;