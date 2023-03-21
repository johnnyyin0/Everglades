import charMap from './CharMap.js'
import CharRadioSelector from './CharRadioSelector.jsx'

export default function CharacteristicReview( { characteristics, charRatings, setCharRatings }) {

  const radioMap = (chars) => {
    let toRender = [];
    for (let key in chars) {
      toRender.push (
        <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} charRatings={charRatings} setCharRatings={setCharRatings} />
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