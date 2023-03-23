const SingleImage = ({image, setPhoto, photo, i, setIndex, index}) => {
  //Sets the image to the one clicked on
  const imageClick = () => {
    setIndex(i);
    setPhoto(image.url);
  };
  return (
    <div className="">
      {image.thumbnail_url === photo || index === i ?
      <img src={image.thumbnail_url} onClick={(e) => imageClick()} className=" object-fill h-14 w-14 max-w-[80px] rounded-lg mr-2 mb-2 ml-2 border-4 border-blue-600 hover:scale-105 ease-in-out duration-300"></img>
        : <img src={image.thumbnail_url} onClick={(e) => imageClick()} className="object-fill h-12 w-12 max-w-[60px] rounded-lg mr-2 mb-2 ml-2 hover:scale-105 ease-in-out duration-300"></img>
      }
    </div>
  );
}

export default SingleImage;