export default function StarAvgSlider({num, avg}) {

  return (
    <div className="mb-1">
    <span className="float-right mr-7">
      <progress className="progress w-64" value={avg} max="100"></progress>
    </span>
    <span className="btn btn-xs ml-7">{num} star{num === 1 ? ' ' : 's'}</span>
    </div>
  )
}