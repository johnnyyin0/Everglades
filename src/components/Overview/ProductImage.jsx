import React from 'react';
import {useState, useEffect} from 'react';
import ImageGallery from './imageGallery.jsx'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useImageSize } from 'react-image-size';

const ProductImage = ({photo, styleSelected, setPhoto, setFullScreen, setIndex, index, nextButton, backButton}) => {
  const [dimensions, { loading, error }] = useImageSize(photo);

  const handleFullScreen = () => {
    setFullScreen(true);
  };

  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-1">
        <div className='flex flex-col justify-between overflow-y-auto w-[100px] h-[600px] pt-12'>
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
        </div>
      </div>
      <div className="col-span-5">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      :
      <>
      <div className='flex flex-row justify-between w-[95%] ml-6 '>
      <div className="border-black border-2 rounded-xl"><button onClick={backButton} classname="btn m-1">Back</button></div>
      <div className="border-black border-2 rounded-xl"><button onClick={nextButton} classname="btn m-1 ">Next</button></div>
      </div>

      <div onClick={handleFullScreen} className=" w-[95%] ml-6">
      <InnerImageZoom
            src = {photo}
            zoomSrc= {photo}
            width = {dimensions?.width}
            height = {dimensions?.height}
            zoomScale = {1}
            fullscreenOnMobile={true}
            hideHint={true} // default false
            zoomType="hover"
            className="cursor-crosshair rounded border bg-white p-1 object-fill max-w-[99%]"
            />
      </div>
      </>
    }
    </div>
    </div>
  )
}

export default ProductImage;