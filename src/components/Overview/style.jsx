const Style = ({style, setPhoto, setSelectedStyle, styleSelected, createSkusArray}) => {
  let styleClick = (e) => {
    setSelectedStyle(style);
    setPhoto(style.photos[0].url);
    createSkusArray(style.skus)
  }

  return (
    <>
    {style == styleSelected ?
    <img src={style.photos[0].thumbnail_url} className="object-fill h-[70px] w-[70px] rounded-full ml-4 border-4 border-emerald-600 hover:scale-105 ease-in-out duration-300"></img>
      : <div onClick={(e) => styleClick(e)}>
    <img src={style.photos[0].thumbnail_url} className="object-fill h-[60px] w-[60px] rounded-full ml-4 hover:scale-105 ease-in-out duration-300"></img>
    </div>
    }
    </>
  )
}


export default Style;