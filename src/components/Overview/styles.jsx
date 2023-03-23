import Style from './style.jsx';
import {useState} from 'react';

const Styles = ({currentStyle, setPhoto, styleSelected, setSelectedStyle, createSkusArray}) => {
  return (
    <>
      <p className="pt-10 pl-7 text-xl">Styles</p>
    <div className="h-30 grid grid-cols-4 gap-7 content-center pt-5">
      {currentStyle.map(style => {
        return (
          <div>
          <Style className="col-span-1" style={style} key={style.style_id} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected} createSkusArray={createSkusArray}/>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default Styles;