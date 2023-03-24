const SingleImage = ({image, setPhoto, photo, i, setIndex, index}) => {
  //Sets the image to the one clicked on
  const imageClick = () => {
    setIndex(i);
    setPhoto(image.url);
  };
  return (
    <div className="">
      {image.thumbnail_url === photo || index === i ?
      <img src={image.thumbnail_url} onClick={(e) => imageClick()} className=" object-fill h-[70px] w-[70px] rounded-full mr-2 mb-2 ml-2 border-4 border-blue-600 hover:scale-105 ease-in-out duration-300"></img>
        : <img src={image.thumbnail_url} onClick={(e) => imageClick()} className="object-fill h-[60px] w-[60px] rounded-full mr-2 mb-2 ml-2 hover:scale-105 ease-in-out duration-300"></img>
      }
    </div>
  );
}

export default SingleImage;