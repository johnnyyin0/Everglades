import SingleImage from './SingleImage.jsx';

const ImageGallery = ({styleSelected, setPhoto, photo, setIndex}) => {
  return (
    <div>
      {styleSelected.photos.map((image, i) => {
        return <SingleImage key={i} i={i} image={image} setPhoto={setPhoto} photo={photo} setIndex={setIndex}/>
      })}
    </div>
  );
}

export default ImageGallery;