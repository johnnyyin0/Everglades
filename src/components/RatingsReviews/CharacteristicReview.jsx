import _ from 'underscore'
import charMap from './CharMap.js'
import CharRadioSelector from './CharRadioSelector.jsx'

export default function CharacteristicReview( { chars, charRatings, setCharRatings }) {

  return (
    <div>
      {_.map(chars, (value, key) => (
        <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} charRatings={charRatings} setCharRatings={setCharRatings} id={value.id} key={value.id}/>
      ))}
    </div>
  )
}