import CaroselProduct from './CaroselProduct.jsx';
import CompareModal from './CompareModal.jsx'
import {useState, useEffect} from 'react';
import Axios from 'axios';


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

  return (

    <div className="flex flex-row">
      {relative.map( product =>
      <CaroselProduct key={product.style_id} product={product} setModal={setModal} selectClickedProduct={selectClickedProduct}/>
      )}
      <CompareModal modalVisable={modalVisable} setModal={setModal} styleSelected={styleSelected} clickedProductStyle={clickedProductStyle} currentProduct={currentProduct} clickedProduct={clickedProduct}/>
</div>
 );
}
export default Carosel;