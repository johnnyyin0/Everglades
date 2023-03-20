export default function CarouselPhoto({ src, setPhoto }) {

  const handleClick = (evt) => {
    setPhoto(evt.target.src);
  }

  return (
    <div className="carousel-item" onClick={handleClick}>
      <img className="h-32" src={src} alt="Review Photo" />
    </div>

  )
}