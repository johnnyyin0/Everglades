import _ from 'underscore'
import charMap from './CharMap.js'
import CharRadioSelector from './CharRadioSelector.jsx'

export default function CharacteristicReview( { chars, charRatings, setCharRatings, setCharsFilled, form, setForm }) {

  return (
    <div>
      {_.map(chars, (value, key) => (
        <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} setForm={setForm} form={form} id={value.id} key={value.id} setCharsFilled={setCharsFilled} chars={chars} />
      ))}
    </div>
  )
}