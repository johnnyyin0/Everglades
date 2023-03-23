import React from 'react';
import {useState} from 'react';
import ImageGallery from './imageGallery.jsx'

const ProductImage = ({photo, styleSelected, setPhoto, setFullScreen, setIndex, index}) => {
  const handleFullScreen = () => {
    setFullScreen(true);
  };
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-1">
        <div className='flex flex-col justify-between gap-7 overflow-y-auto h-[600px]'>
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
        </div>
      </div>
      <div className="col-span-5">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      : <img className="rounded border bg-white p-1 object-cover h-[600px] w-[500px]" src={photo} alt="image" onClick={handleFullScreen}></img>
    }
    </div>
    </div>
  )
}

export default ProductImage;