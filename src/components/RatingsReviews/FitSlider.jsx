import charMap from './CharMap.js'

export default function FitSlider({ fitChar, charId, charVal }) {

  let value = parseFloat(charVal)

  const pctLeft = ((value / 5 * 90) - 45).toString() + '%'
  const position = {left: pctLeft}

  return (

    <div className="pb-5 " key={charId} title="fit-slider">
      <div className="pb-2 text-2xl">{fitChar}</div>
      <div className="relative flex content-center">
          <div className="triangle-slider absolute -mt-2 z-10 text-7xl mask mask-triangle-2 bg-black dark:bg-slate-200 w-full h-4" style={position}>.</div>
        <div className="flex justify-evenly w-full">
          <progress className="progress w-3/12 dark:bg-zinc-600" value="0" max="100"></progress>
          <progress className="progress w-5/12 dark:bg-zinc-600" value="0" max="100"></progress>
          <progress className="progress w-3/12 dark:bg-zinc-600" value="0" max="100"></progress>
        </div>
      </div>
        <div className="w-full grid grid-cols-12 pt-2">
          <span className="col-start-1 col-span-4 text-xs text-center -ml-5">{charMap[fitChar][0]}</span>
          {charMap[fitChar][2] === 'Perfect' && <span className="col-start-5 col-span-4 text-xs  text-center pr-2">{charMap[fitChar][2]}</span>}
          <span className="col-end-13 col-span-4 text-xs  text-center -mr-5">{charMap[fitChar][4]}</span>
        </div>
    </div>
  )
}