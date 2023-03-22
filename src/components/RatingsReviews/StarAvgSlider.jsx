export default function StarAvgSlider({num, avg}) {

  //hardcoded for testing
  let numReviews = 9;

  return (
    <div className="mb-1 h-max w-max">
    <span className="float-right mr-7">{`(${numReviews})`}</span>
    <span className="float-right pr-5">
      <progress className="progress progress-success w-32 pl-4" value={avg} max="5"></progress>
    </span>
    <span className="btn btn-xs ml-5 w-20">{num} star{num === 1 ? '' : 's'}</span>
    </div>
  )
}