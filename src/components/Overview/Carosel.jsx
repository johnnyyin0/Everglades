import CaroselProduct from './CaroselProduct.jsx';
import CompareModal from './CompareModal.jsx'
import {useState, useEffect} from 'react';
import Axios from 'axios';


let Carosel = ({relative, currentProduct, styleSelected, outfitCarousel, outfitsId, addOutfit, deleteOutfit}) => {
  styleSelected.productId = currentProduct.id;

  let [modalVisable, setModal] = useState(false);

  //state to find which product was clicked on
  let [clickedProduct, selectClickedProduct] = useState('');
  let [clickedProductStyle, selectClickedProductStyle] = useState('');

  let elementId = outfitCarousel ? 'outfitSlider' : 'slider';

  let productClicked = (clickedProduct) => {
    console.log(clickedProduct);
    let cached = localStorage.getItem(`product${clickedProduct.id}styles`);
    if (cached) {
      selectClickedProductStyle(JSON.parse(cached))
    } else {
      Axios.get(`api/product/${clickedProduct.id}/styles`)
      .then(res => {
        selectClickedProductStyle(res.data.results[0])
        localStorage.setItem(`product${clickedProduct.id}styles`, JSON.stringify(res.data.results[0]))
      })
      .catch(err => console.log(err));
    }
  }

  const slideLeft = () => {
    let slider = document.getElementById(elementId)
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById(elementId)
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  let notinOutfitState = !outfitsId.includes(currentProduct.id);

  return (

    <div className="flex items-center relative">
      <button onClick={slideLeft} className="btn-ghost btn-circle cursor-pointer opacity-50 hover:opacity-100">❮</button>
      <div id={elementId} className='w-[850px] h-[415px] h-full flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth items-center'>
        {notinOutfitState && outfitCarousel ?
        <CaroselProduct product={styleSelected} setModal={setModal} selectClickedProduct={selectClickedProduct} productClicked={productClicked} outfitCarousel={outfitCarousel} addOutfitCard={true} addOutfit={addOutfit} deleteOutfit={deleteOutfit}/>
      : null}

      {relative.map( (product, index) =>
      <CaroselProduct key={index} product={product} setModal={setModal} selectClickedProduct={selectClickedProduct} productClicked={productClicked} outfitCarousel={outfitCarousel} addOutfitCard={false} addOutfit={addOutfit} deleteOutfit={deleteOutfit}/>
      )}

      </div>
      <CompareModal modalVisable={modalVisable} setModal={setModal} styleSelected={styleSelected} clickedProductStyle={clickedProductStyle} currentProduct={currentProduct} clickedProduct={clickedProduct}/>
      <button onClick={slideRight} className="btn-ghost btn-circle cursor-pointer opacity-50 hover: opacity-50">❯</button>
</div>
 );
}
export default Carosel;