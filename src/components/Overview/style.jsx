const Style = ({style}) => {
  return (
    <>
    <img src={style.photos[0].thumbnail_url} className="max-h-[60px] max-w-[60px] flex-1 rounded-lg mr-2 ml-2"></img>
    </>
  )
}

export default Style;