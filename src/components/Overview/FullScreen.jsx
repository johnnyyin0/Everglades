import {useState} from 'react';
import ReactImageMagnify from 'react-image-magnify';
const FullScreen = ({setFullScreen, styleSelected}) => {
console.log(styleSelected);
  let [index, setIndex] = useState(0);

  // let [size, setSize] = useState({height: 100, width: 100})

  let handleFullScreen = () => {
    setFullScreen(false);
  };

  const nextButton = () => {
    console.log(index);
    let lastButton = index === styleSelected.photos.length - 1;
    let newIndex = lastButton ? 0 : index + 1;
    setIndex(newIndex);
  }

  const backButton = () => {
    let firstButton = index === 0;
    let newIndex = firstButton ? styleSelected.photos.length - 1 : index - 1;
    setIndex(newIndex);
  }


  return (
    <>
    <div className="">
      {/* <img src={styleSelected.photos[index].thumbnail_url} className="w-full max-h-[40%] max-w-[40%] rounded-2xl bg-center bg-cover duration-500 flex-1"></img> */}
      <div className="max-w-[500px] max-h-[500px]">

      <ReactImageMagnify {...{
        smallImage: {
          alt: styleSelected.name,
          isFluidWidth: true,
          src: styleSelected.photos[index].thumbnail_url
        },
        largeImage: {
          src: styleSelected.photos[index].thumbnail_url,
          width: 500,
          height: 500
        }
      }} />
      </div>
      <div className="absolute top-[10%] left-[10%] rounded-full p-2 bg-black/20">
        <button onClick={backButton}>🢀</button>
        </div>
        <div className="absolute top-[10%] right-[10%] rounded-full p-2 bg-black/20">
          <button onClick={nextButton}>🢂</button>
          </div>
          </div>
    <div className="flex justify-center">
      <button className='btn flex-1 mb-6' onClick={() => handleFullScreen()}>Exit Full Screen</button>
      </div>
    </>
    )
  }
  export default FullScreen;