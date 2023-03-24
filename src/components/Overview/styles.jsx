import Style from './style.jsx';
import {useState} from 'react';

const Styles = ({currentStyle, setPhoto, styleSelected, setSelectedStyle, createSkusArray}) => {
  return (
    <>
      <p className="pl-4 pb-2 text-xl">Styles</p>
    <div className="h-30 grid grid-cols-4 gap-2 content-center ">
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