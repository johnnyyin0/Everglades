export default function StarAvgSlider({num, avg}) {

  //hardcoded for testing
  let numReviews = 9;

  return (
    <div className="mb-1">
    <span className="float-right mr-7">{`(${numReviews})`}</span>
    <span className="float-right pr-5">
      <progress className="progress progress-success w-28 pl-4" value={avg} max="100"></progress>
    </span>
    <span className="btn btn-xs ml-5">{num} star{num === 1 ? ' ' : 's'}</span>
    </div>
  )
}