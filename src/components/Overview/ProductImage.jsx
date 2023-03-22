import React from 'react';
import {useState} from 'react';
import ImageGallery from './imageGallery.jsx'

const ProductImage = ({photo, styleSelected, setPhoto, setFullScreen, setIndex, index}) => {
  const handleFullScreen = () => {
    setFullScreen(true);
  };
  return (
    <div className="flex justify-end">
      <div className="col-span-1">
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
      </div>
      <div className="col-span-1 p-1">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      : <img className="rounded border bg-white p-1 object-cover h-[600px] w-[500px]" src={photo} alt="image" onClick={handleFullScreen}></img>
    }
    </div>
    </div>
  )
}

export default ProductImage;