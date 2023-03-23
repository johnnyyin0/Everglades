import _ from 'underscore'
import charMap from './CharMap.js'
import CharRadioSelector from './CharRadioSelector.jsx'

export default function CharacteristicReview( { chars, charRatings, setCharRatings }) {

  // const radioMap = (chars) => {
  //   let toRender = [];
  //   for (let key in chars) {
  //     toRender.push (
  //       <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} charRatings={charRatings} setCharRatings={setCharRatings} id={chars[key][id]} />
  //     )
  //   }
  //   return toRender
  // }


  return (
    <div>
      {_.map(chars, (value, key) => (
        <CharRadioSelector fitChar={key} best={charMap[key][4]} worst={charMap[key][0]} charRatings={charRatings} setCharRatings={setCharRatings} id={value.id} />
      ))}
    </div>
  )
}