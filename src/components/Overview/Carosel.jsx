import StarsWidget from '../RatingsReviews/StarsWidget.jsx';
import CaroselProduct from './CaroselProduct.jsx';
let Carosel = ({relative}) => {
console.log(relative);
  return (

    <div className="carousel carousel-center rounded-box">
      {relative.map( product =>
      <CaroselProduct key={product.style_id} product={product}/>
  )}
</div>
 );
}
export default Carosel;