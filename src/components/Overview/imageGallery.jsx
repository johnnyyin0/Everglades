import SingleImage from './SingleImage.jsx';

const ImageGallery = ({styleSelected, setPhoto, photo, setIndex, index}) => {
  return (
    <>
      {styleSelected.photos.map((image, i) => {
        return <SingleImage key={i} i={i} image={image} setPhoto={setPhoto} photo={photo} setIndex={setIndex} index={index}/>
      })}
    </>
    );
}

export default ImageGallery;