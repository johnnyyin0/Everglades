import Style from './style.jsx';

const Styles = ({currentStyle}) => {

  return (
    <>
      <p>Styles</p>
    <div className="flex">
      {currentStyle.map(style => {
        return <Style style={style} key={style.style_id} />
      })}
    </div>
    </>
  )
}

export default Styles;