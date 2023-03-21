const Style = ({style, setPhoto, setSelectedStyle, styleSelected}) => {
  let styleClick = (e) => {
    setSelectedStyle(style);
    setPhoto(style.photos[0].thumbnail_url);
  }

  return (
    <>
    {style == styleSelected ?
    <img src={style.photos[0].thumbnail_url} className="max-h-[60px] max-w-[60px] flex-1 rounded-lg mr-2 ml-2 border-4 border-blue-600"></img>
      : <div onClick={(e) => styleClick(e)}>
    <img src={style.photos[0].thumbnail_url} className="max-h-[60px] max-w-[60px] flex-1 rounded-lg mr-2 ml-2"></img>
    </div>
    }
    </>
  )
}

export default Style;