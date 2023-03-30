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
    <div className="grid grid-cols-6 gap-2 h-[500px] w-[100%] pr-20" title="product-image">
      <div className="col-span-1 relative pl-[170px] z-10">
        <div className='flex flex-col gap-2 justify-between overflow-y-auto w-[100px] h-[625px] pt-3'>
        <ImageGallery styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
        </div>
      </div>
      <div className="col-span-5">
    { photo == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1  object-cover h-[600px] w-[500px]" />
      :
      <>
      <div className='flex flex-row justify-between w-[100%] ml-6'>
{/* buttons */}


      </div>

        <div className="relative">
      <div onClick={handleFullScreen} className=" w-[80%] ml-[140px]">

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
      <div className="rounded-xl absolute left-[155px] top-2 z-1"><button className="btn-circle cursor-pointer hover: opacity-50" onClick={backButton} >❮</button></div>
      <div className="rounded-xl absolute top-2 right-0 z-1"><button className="btn-circle cursor-pointer hover: opacity-50" onClick={nextButton} >❯</button></div>
            </div>
      </>
    }
    </div>
    </div>
  )
}

export default ProductImage;