import Style from './style.jsx';
import {useState} from 'react';

const Styles = ({currentStyle, setPhoto, styleSelected, setSelectedStyle, createSkusArray}) => {
  return (
    <>
      <p className="pl-4 text-xl whitespace-nowrap" title="styles">Styles -❯ {styleSelected.name}</p>
    <div className="h-30 grid grid-cols-4 gap-4 content-center mt-5 ">
      {currentStyle.map((style, index) => {
        return (
          <div key={index}>
          <Style className="col-span-1" style={style} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected} createSkusArray={createSkusArray}/>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default Styles;