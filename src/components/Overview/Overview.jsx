import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import ProductName from './productName.jsx';
import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import ProductDescription from './ProductDescription.jsx';
import ProductImage from './ProductImage.jsx';
import AddCart from './AddCart.jsx';
import exampleStyle from './exampleStyle.js';
import exampleProduct from './exampleProduct.js';
import Carosel from './Carosel.jsx';
import Styles from './styles.jsx';

let Overview = () => {
  let productId = window.location.pathname.slice(1) || 37311;

  //states
  let [products, setProducts] = useState([]);


  let [currentProduct, setCurrentProduct] = useState(exampleProduct);
  let [currentStyle, setCurrentStyle] = useState(exampleStyle.results);

  let [photo, setPhoto] = useState(currentStyle[0].photos[0].thumbnail_url);

  let [relative, setRelative] = useState([]);
  //useEffect
  useEffect(() => {
    Axios.get('http://localhost:3000/products')
    .then(res => setProducts(res))
      .catch(err => console.log('Failed to load products'));
  }, [])


  let relativeIdNumbers = [];
  // When the currentId changes, change the current data
  useEffect(() => {
    Axios.get(`http://localhost:3000/product/${productId}`)
    .then(res => setCurrentProduct(res.data))
    .catch(err => console.log('Failed to load product'))
    .then(Axios.get(`http://localhost:3000/product/${productId}/styles`)
      .then(res => {
        setCurrentStyle(res.data.results);
        setPhoto(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch(err => console.log('Failed to load product styles')))
      .then(Axios.get(`http://localhost:3000/product/${productId}/related`)
      .then(res => {
        relativeIdNumbers = [...res.data];
        return relativeIdNumbers
      })
      //iterate over the relativeIdNumbers, do a axios get request on each id
      .then(idArray => {
        let relativeItems = [];
        idArray.forEach(id => {
          Axios.get(`http://localhost:3000/product/${id}/styles`)
          .then(res => {
            setRelative(...relative, res.data.results)
          })
        })
      })
      )
    }, [])

  return (
    <>
    <div className="grid grid-cols-5 gap-2" >
      <div className=" col-span-1 row-span-4"></div>
      <div className=' rounded-lg min-h-[50px] col-span-1 row-span-4'>
        <ProductImage photo={photo} />
      </div>

      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <StarsWidget />
        </div>


      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <ProductName currentProduct={currentProduct}/>
      </div>

      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <Styles currentStyle={currentStyle}/>
        </div>

      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <AddCart />
        </div>

    </div>
    <ProductDescription currentProduct={currentProduct}/>
    <Carosel relative={relative}/>
    </>
  );
}

export default Overview;