import CaroselProduct from './CaroselProduct.jsx';
import CompareModal from './CompareModal.jsx'
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


let Carosel = ({relative, currentProduct, styleSelected}) => {

  let [modalVisable, setModal] = useState(false);

  //state to find which product was clicked on
  let [clickedProduct, selectClickedProduct] = useState('');
  let [clickedProductStyle, selectClickedProductStyle] = useState('');

  useEffect(()=> {
    Axios.get(`http://localhost:3000/product/${clickedProduct.id}/styles`)
    .then(res => selectClickedProductStyle(res.data.results[0]))
    .catch(err => console.log(err));
  }, [clickedProduct])

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
      <MdChevronLeft onClick={slideLeft} size={60} className="cursor-pointer opacity-50 hover:opacity-100"/>
      <div id='slider' className='w-[1100px] h-[415px] h-full flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
      {relative.map( product =>
      <CaroselProduct key={product.style_id} product={product} setModal={setModal} selectClickedProduct={selectClickedProduct}/>
      )}
      </div>
      <CompareModal modalVisable={modalVisable} setModal={setModal} styleSelected={styleSelected} clickedProductStyle={clickedProductStyle} currentProduct={currentProduct} clickedProduct={clickedProduct}/>
      <MdChevronRight onClick={slideRight} size={60} className="cursor-pointer opacity-50 hover: opacity-50"/>
</div>
 );
}
export default Carosel;