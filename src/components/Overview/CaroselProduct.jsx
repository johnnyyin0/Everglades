import React from 'react';
import Axios from 'axios';
import {useState, useEffect} from 'react';


const CaroselProduct = ({product}) => {
  let hrefUrl = `http://localhost:5173/${product.productId}`;

  let [carouselProduct, setCarouselProduct] = useState('');
  useEffect(() => {
    Axios.get(`http://localhost:3000/product/${product.productId}`)
    .then(res => {
      setCarouselProduct(res.data);
    })
  }, [])

  return (
  <div className="carousel-item mr-2 ml-2">
    <div className="grid grid-cols-1 auto-rows-max gap-2">
      { product.photos[0].thumbnail_url == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="max-h-[200px]" />
       : <img src={product.photos[0].thumbnail_url} className="max-h-[200px]" />
      }
      <a href={hrefUrl}>
      <div className="bg-gray-300">
        <p className="">{carouselProduct.category}</p>
        <p className="">{carouselProduct.name}</p>
          {product.sale_price ?
          <>
          <p className="line-through">{product.original_price}</p>
          <p>{product.sale_price}</p>
          </>
        : <p>{product.original_price}</p>}
        </div>
      </a>
        </div>
        </div>
        );
      }


    export default CaroselProduct;