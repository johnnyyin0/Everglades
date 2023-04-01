import React, { useState } from 'react'
import charMap from './CharMap.js'

export default function CharRadioSelector({ chars, fitChar, id, best, worst, setCharsFilled, form, setForm }) {

  const [ description, setDescription ] = useState('none selected')

  const handleClick = (evt) => {
   let desc = charMap[fitChar][parseInt(evt.target.value)]
   setDescription(desc)
   let charObj = form.charRatings
   charObj[evt.target.name] = (parseInt(evt.target.value) + 1)
   if (Object.keys(charObj).length === Object.keys(chars).length) {
    setCharsFilled(true)
   }
   setForm({...form, charRatings: charObj})
  }

  return (
    <div className="pb-5 h-28">
      <label className="label">
        <span className="label-text text-xl pt-2 dark:text-slate-200">{fitChar}</span>
        <span className="label-text-alt float-right pt-5 text-blue-500">{description}</span>
      </label>
      <div className="flex content-center">
        <div className="flex justify-between px-7 w-full">
          <input type="radio" name={id} value="0" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={id} value="1" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={id} value="2" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={id} value="3" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={id} value="4" className="radio-xs"  onClick={handleClick}/>
        </div>
      </div>
      <div className="flex justify-between px-3 w-full pt-1 text-xs">
        <span>{worst}</span>
        <span>{best}</span>
      </div>
    </div>
  )
}