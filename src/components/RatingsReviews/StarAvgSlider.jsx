export default function StarAvgSlider({ star, avg, votes, allReviews, setAllReviews }) {

  const handleClick = (evt) => {
    let filteredReviews = allReviews.slice().filter(review => review.rating === parseInt(star));
    setAllReviews(filteredReviews)
  }

  return (
    <div className="mb-1 h-max w-full">
      <span className="float-right pr-5">{`(${votes})`}</span>
      <span className="btn btn-xs ml-5 w-20" onClick={handleClick}>{star} star{star === 1 ? '' : 's'}</span>
      <span className="" >
        <progress className="progress progress-success dark:bg-zinc-600 w-32 mx-4" value={avg} max="1"></progress>
      </span>
    </div>
  )
}