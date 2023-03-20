export default function FitSlider(props) {

  //hardcodes for testing
  props = props | 7;
  let value = 2.5
  const fitChar="Size"


  const pctLeft = ((value / 5 * 90) - 45).toString() + '%'
  const position = {left: pctLeft}

  return (

    <div className="pb-5">
      <div className="pl-2 pb-3 text-2xl">{fitChar}</div>
      <div className="relative flex content-center">
          <div className="triangle-slider absolute -mt-2 z-10 text-7xl mask mask-triangle-2 bg-black w-full h-4" style={position}>.</div>
        <div className="flex justify-evenly w-full">
          <progress className="progress w-3/12" value="0" max="100"></progress>
          <progress className="progress w-5/12" value="0" max="100"></progress>
          <progress className="progress w-3/12" value="0" max="100"></progress>
        </div>
      </div>
        <div className="flex justify-between px-2 w-full">
          <span>Papa Bear</span>
          <span>Baby Bear</span>
          <span>Mama Bear</span>
        </div>
    </div>
  )
}