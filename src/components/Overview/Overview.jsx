import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import ProductName from './productName.jsx';
import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import ProductDescription from './ProductDescription.jsx';
import ProductImage from './ProductImage.jsx';
import FullScreen from './FullScreen.jsx';
import AddCart from './AddCart.jsx';
import exampleStyle from './exampleStyle.js';
import exampleProduct from './exampleProduct.js';
import Carosel from './Carosel.jsx';
import Styles from './styles.jsx';

let Overview = () => {
  let productId = window.location.pathname.slice(1) || 37311;

  //states
  let [products, setProducts] = useState([]);

  //array of all the products from api
  let [currentProduct, setCurrentProduct] = useState(exampleProduct);
  //all the styles from
  let [currentStyle, setCurrentStyle] = useState(exampleStyle.results);

  //true false for fullscreen modal
  let [isFullScreen, setFullScreen] = useState(false);

  //state to be "selected" when picture is showing on overview
  let [styleSelected, setSelectedStyle] = useState(currentStyle[0])

  let [photo, setPhoto] = useState(currentStyle[0].photos[0].thumbnail_url);

  let [relative, setRelative] = useState([]);

  //useEffect
  useEffect(() => {
    Axios.get('http://localhost:3000/products')
    .then(res => {
      setProducts(res.data)})
      .catch(err => console.log('Failed to load products'));
  }, [])


  // When the currentId changes, change the current data
  useEffect(() => {
    Axios.get(`http://localhost:3000/product/${productId}`)
    .then(res => setCurrentProduct(res.data))
    .catch(err => console.log('Failed to load product'))
    .then(Axios.get(`http://localhost:3000/product/${productId}/styles`)
      .then(res => {
        setCurrentStyle(res.data.results);
        setSelectedStyle(res.data.results[0]);
        setPhoto(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch(err => console.log('Failed to load product styles')));
    }, [])


    let relativeIdNumbers = [];
    useEffect(() => {
      Axios.get(`http://localhost:3000/product/${productId}/related`)
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
              //adding product id to the style
              res.data.results[0].productId = id
              setRelative(relative => relative.concat(res.data.results[0]))
            })
            })
        })
      }, [])

      // useEffect(()=>{
      //   Axios.get(`http://localhost:3000/reviews/meta`, {productId})
      //   .then(res => console.log(res));
      // }, [])


  return (
    <>
    { isFullScreen ?
      <FullScreen setFullScreen={setFullScreen}/>
      : <>
      <div className="grid grid-cols-6 gap-2" >
      <div className="col-span-1 row-span-4"></div>
      <div className='rounded-lg min-h-[120px] col-span-2 row-span-4'>
      <ProductImage photo={photo} styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen}/>
      </div>

      <div className=' rounded-lg shadow-xl max-h-[60px] min-h-[50px] col-span-2'>
      <StarsWidget />
      </div>


      <div className=' rounded-lg shadow-xl max-h-[80px] min-h-[50px] col-span-2'>
      <ProductName currentProduct={currentProduct} styleSelected={styleSelected}/>
      </div>

      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
      <Styles currentStyle={currentStyle} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected}/>
      </div>

      <div className=' rounded-lg shadow-xl min-h-[50px] col-span-2'>
      <AddCart />
      </div>

      </div>
      <ProductDescription currentProduct={currentProduct}/>
      <Carosel relative={relative}/>
      </>
    }
    </>
      );
    }

    export default Overview;