import charMap from './CharMap.js'
import CharRadioSelector from './CharRadioSelector.jsx'

export default function CharacteristicReview( { characteristics }) {

  const radioMap = (chars) => {
    let toRender = [];
    for (let key in chars) {
      toRender.push (
        <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} />
      )
    }
    return toRender
  }


  return (
    <div>
      {radioMap(characteristics)}
    </div>
  )
}