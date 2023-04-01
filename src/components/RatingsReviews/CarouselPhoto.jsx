export default function CarouselPhoto({ src, setPhoto, setDelButton }) {

    const handleClick = (evt) => {
      setDelButton(true)
      setPhoto(evt.target.src)
    }

    return (
      <div className="carousel-item" onClick={handleClick}>
        <label htmlFor="fullsize-photo-modal">
          <img className="h-32 review-photo" src={src} alt="Review Photo" />
          </label>
      </div>

    )
}