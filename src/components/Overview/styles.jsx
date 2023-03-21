import Style from './style.jsx';
import {useState} from 'react';

const Styles = ({currentStyle, setPhoto, styleSelected, setSelectedStyle}) => {
  return (
    <>
      <p>Styles</p>
    <div className="grid grid-cols-4 gap-2">
      {currentStyle.map(style => {
        return (
          <div>
          <Style className="col-span-1" style={style} key={style.style_id} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected}/>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default Styles;