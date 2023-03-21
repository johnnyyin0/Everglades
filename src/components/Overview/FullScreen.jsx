import {useState} from 'react';

const FullScreen = ({setFullScreen, styleSelected}) => {

  let [index, setIndex] = useState(0);

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
    <div className=" w-full m-auto py-16 px-4 flex justify-center">
      <img src={styleSelected.photos[index].thumbnail_url} className="w-full max-h-[30%] max-w-[30%] rounded-2xl bg-center bg-cover duration-500 flex-1"></img>
      <div className="absolute top-[50%] left-[30%] rounded-full p-2 bg-black/20">
        <button onClick={backButton}>🢀</button>
        </div>
        <div className="absolute top-[50%] right-[30%] rounded-full p-2 bg-black/20">
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