import React, { useState } from 'react'
import charMap from './CharMap.js'

export default function CharRadioSelector({ fitChar, best, worst }) {

  const [ description, setDescription ] = useState('none selected')

  const handleClick = (evt) => {
   let desc = charMap[evt.target.name][parseInt(evt.target['value'])]
   setDescription(desc)
  }

  return (
    <div className="pb-5 h-28">
      <label className="label">
        <span className="label-text text-xl pb-3 pt-2">{fitChar}</span>
        <span className="label-text-alt">{description}</span>
      </label>
      <div className="flex content-center">
        <div className="flex justify-between px-7 w-full">
          <input type="radio" name={fitChar} value="0" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={fitChar} value="1" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={fitChar} value="2" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={fitChar} value="3" className="radio-xs"  onClick={handleClick}/>
          <input type="radio" name={fitChar} value="4" className="radio-xs"  onClick={handleClick}/>
        </div>
      </div>
      <div className="flex justify-between px-3 w-full pt-1">
        <span>{worst}</span>
        <span>{best}</span>
      </div>
    </div>
  )
}