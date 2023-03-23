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
        <div className='flex flex-col justify-between gap-7 overflow-y-auto h-[800px] pt-12'>
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
        </div>
      </div>
      <div className="col-span-5">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      :
      <>
      <div className='flex flex-row justify-between w-[95%]'>
      <div><button onClick={backButton} classname="btn m-1">Back</button></div>
      <div><button onClick={nextButton} classname="btn m-1">Next</button></div>
      </div>

      <div onClick={handleFullScreen} className="h-[95%] w-[95%]">
      <InnerImageZoom
            src = {photo}
            zoomSrc= {photo}
            width = {dimensions?.width}
            height = {dimensions?.height}
            zoomScale = {1}
            fullscreenOnMobile={true}
            hideHint={true} // default false
            zoomType="hover"
            className="cursor-crosshair rounded border bg-white p-1 object-fill max-h-[800px] max-w-[99%]"
            />
      </div>
      </>
    }
    </div>
    </div>
  )
}
// width = {dimensions?.height}
// height = {dimensions?.height}

// {/* <img className="rounded border bg-white p-1 object-cover h-[600px] w-[500px]" src={photo} alt="image" onClick={handleFullScreen}></img> */}
// rounded border bg-white p-1 object-cover h-[600px] w-[500px]
export default ProductImage;