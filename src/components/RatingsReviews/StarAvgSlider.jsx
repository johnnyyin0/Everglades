export default function StarAvgSlider({ star, avg, votes, allReviews, setShownReviews }) {

  const handleClick = (evt) => {
    console.log('Set filter to ' + star)
    let toFilter = allReviews.slice().filter(review => review.rating === parseInt(star));
    setShownReviews(toFilter)
  }

  return (
    <div className="mb-1 h-max w-full">
      <span className="float-right pr-5">{`(${votes})`}</span>
      <span className="btn btn-xs ml-5 w-20" onClick={handleClick}>{star} star{star === 1 ? '' : 's'}</span>
      <span className="" >
        <progress className="progress progress-success w-32 pl-4" value={avg} max="1"></progress>
      </span>
    </div>
  )
}