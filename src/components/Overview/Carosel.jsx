import CaroselProduct from './CaroselProduct.jsx';
import CompareModal from './CompareModal.jsx'
import {useState, useEffect} from 'react';
import Axios from 'axios';


let Carosel = ({relative, currentProduct, styleSelected}) => {

  let [modalVisable, setModal] = useState(false);

  //state to find which product was clicked on
  let [clickedProduct, selectClickedProduct] = useState('');
  let [clickedProductStyle, selectClickedProductStyle] = useState('');



  let productClicked = (clickedProduct) => {
    console.log(clickedProduct);
    Axios.get(`api/product/${clickedProduct.id}/styles`)
    .then(res => selectClickedProductStyle(res.data.results[0]))
    .catch(err => console.log(err));
  }

  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (

    <div className="flex items-center relative">
      <button onClick={slideLeft} className="btn-ghost btn-circle cursor-pointer opacity-50 hover:opacity-100">❮</button>
      <div id='slider' className='w-[1100px] h-[415px] h-full flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth items-center'>
      {relative.map( (product, index) =>
      <CaroselProduct key={index} product={product} setModal={setModal} selectClickedProduct={selectClickedProduct} productClicked={productClicked}/>
      )}
      </div>
      <CompareModal modalVisable={modalVisable} setModal={setModal} styleSelected={styleSelected} clickedProductStyle={clickedProductStyle} currentProduct={currentProduct} clickedProduct={clickedProduct}/>
      <button onClick={slideRight} className="btn-ghost btn-circle cursor-pointer opacity-50 hover: opacity-50">❯</button>
</div>
 );
}
export default Carosel;