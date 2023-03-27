export default function StarsRater({ stars, setStars }) {

  const handleClick = (evt) => {
    setStars(evt.target.value)
  }

  const starMeaning = {
    "0": "",
    "1": "Poor",
    "2": "Fair",
    "3": "Average",
    "4": "Good",
    "5": "Great!",
  }

  return (
    <div className="py-1" value="outside" title="stars-rater">
      <span className="rating" value="outside">
        <input type="radio" name="rating-1" className="mask mask-star" value="1" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star" value="2" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star" value="3" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star" value="4" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star" value="5" onClick={handleClick}/>
      </span>
        <span className="pl-4 -mt-8 text-xl" value="outside">{`${starMeaning[stars]}`}</span>
    </div>
  )
}