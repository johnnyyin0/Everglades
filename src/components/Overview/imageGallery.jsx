import SingleImage from './SingleImage.jsx';

const ImageGallery = ({styleSelected, setPhoto, photo, setFullScreen}) => {
  let handleFullScreen = () => {
    setFullScreen(true);
  }
  return (
    <div>
      <button className="btn h-[50px] w-[60px] flex-1 rounded-lg mr-2 mb-2 ml-2" onClick={(e) => handleFullScreen()}>⛶</button>
      {styleSelected.photos.map(image => {
        return <SingleImage image={image} setPhoto={setPhoto} photo={photo}/>
      })}
    </div>
  );
}

export default ImageGallery;