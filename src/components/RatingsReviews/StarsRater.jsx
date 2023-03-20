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
    <div className="py-1" value="outside">
      <span className="rating" onClick={handleClick} value="outside">
        <input type="radio" name="rating-1" className="mask mask-star" value="1"/>
        <input type="radio" name="rating-1" className="mask mask-star" value="2"/>
        <input type="radio" name="rating-1" className="mask mask-star" value="3"/>
        <input type="radio" name="rating-1" className="mask mask-star" value="4"/>
        <input type="radio" name="rating-1" className="mask mask-star" value="5"/>
      </span>
        <span className="pl-4 -mt-8 text-xl" value="outside">{`${starMeaning[stars]}`}</span>
    </div>
  )
}