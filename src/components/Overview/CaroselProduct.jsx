import React from 'react';
import Axios from 'axios';
import {useState, useEffect} from 'react';

const CaroselProduct = ({product, setModal, selectClickedProduct}) => {

  let hrefUrl = `http://localhost:5173/${product.productId}`;

  let [carouselProduct, setCarouselProduct] = useState('');


  useEffect(() => {
    Axios.get(`http://localhost:3000/product/${product.productId}`)
    .then(res => {
      setCarouselProduct(res.data);
    })
  }, [])

  let handleModal = () => {
    selectClickedProduct(carouselProduct);
    setModal(true);
  }

  return (
    <div className="carousel-item border-2 border-[#505050] mr-2 ml-2 hover:scale-105 ease-in-out duration-300 bg-white relative">
    <div className="grid grid-cols-1 auto-rows-max gap-2">
    { product.photos[0].thumbnail_url == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="max-h-[200px]" />
      : <img src={product.photos[0].thumbnail_url} className="max-h-[200px]" />
    }
      <a href={hrefUrl} className='text-black'>
      <div className="underline">
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
        <button className="max-h-[50px] max-w-[60px] bg-[#505050] absolute -right-0 -top-1 hover:scale-105 ease-in-out duration-300 rounded" onClick={handleModal}>⭐</button>
        </div>
        );
      }


    export default CaroselProduct;