const SingleImage = ({image, setPhoto, photo}) => {
  //Sets the image to the one clicked on
  const imageClick = () => {
    setPhoto(image.thumbnail_url);
  };
  return (
    <div className="flex">
      {image.thumbnail_url === photo ?
      <img src={image.thumbnail_url} onClick={(e) => imageClick()} className="max-h-[60px] max-w-[60px] flex-1 rounded-lg mr-2 mb-2 ml-2 border-4 border-blue-600 hover:scale-105 ease-in-out duration-300"></img>
        : <img src={image.thumbnail_url} onClick={(e) => imageClick()} className="max-h-[60px] max-w-[60px] flex-1 rounded-lg mr-2 mb-2 ml-2 hover:scale-105 ease-in-out duration-300"></img>
      }
    </div>
  );
}

export default SingleImage;