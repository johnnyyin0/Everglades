import { useState, useMemo } from 'react';
import ImageGallery from './imageGallery.jsx';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useImageSize } from 'react-image-size';

const FullScreen = ({setFullScreen, styleSelected, setIndex, index, setPhoto, photo, nextButton, backButton}) => {
  const thumbnailUrl = styleSelected.photos[index].thumbnail_url;

  const [dimensions, { loading, error }] = useImageSize(thumbnailUrl);

  const memoizedDimensions = useMemo(() => dimensions, [thumbnailUrl]);

  let handleFullScreen = () => {
    setFullScreen(false);
  };


  return (
    <>
    <div className="flex justify-center" title="fullscreen-photo">
      <div className="flex mb-6">
      <InnerImageZoom
            src = {styleSelected.photos[index].url}
            zoomSrc= {styleSelected.photos[index].url}
            width = {memoizedDimensions?.width * 2}
            zoomScale = {1}
            fullscreenOnMobile={true}
            hideHint={false} // default false
            className="cursor-crosshair"
            />
            </div>
      </div>
          <div className="flex flex-row justify-center">
            <ImageGallery className="flex-1 mb-6" styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setIndex={setIndex} index={index}/>
          </div>
      <div className="absolute top-[10%] left-[30%] rounded-full p-2 bg-black/20">
        <button onClick={backButton}>🢀</button>
        </div>
        <div className="absolute top-[10%] right-[30%] rounded-full p-2 bg-black/20">
          <button onClick={nextButton}>🢂</button>
          </div>
    <div className="flex justify-center">
      <button className='btn flex-1 mb-6' onClick={() => handleFullScreen()}>Exit Full Screen</button>
      </div>
    </>
  )
}

export default FullScreen;