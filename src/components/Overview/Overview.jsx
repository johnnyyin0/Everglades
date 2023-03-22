import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import ProductName from './productName.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImage from './ProductImage.jsx';
import FullScreen from './FullScreen.jsx';
import AddCart from './AddCart.jsx';
import RatingsAndShare from './RatingsAndShare.jsx';
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

  //index of photo currently selected on
  let [index, setIndex] = useState(0);

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
              setRelative(relative => [...relative, res.data.results[0]])
            })
            })
        })
      }, [])

      // useEffect(()=>{
      //   Axios.get(`http://localhost:3000/reviews/meta`, {productId})
      //   .then(res => console.log(res));
      // }, [])


  return (
    <div>
    { isFullScreen ?
      <FullScreen setFullScreen={setFullScreen} styleSelected={styleSelected} index={index} setIndex={setIndex} setPhoto={setPhoto}/>
      : <>
      <div className="grid grid-cols-6 gap-2" >
      <div className="col-span-1 row-span-4"></div>
      <div className='rounded-lg  col-span-2 row-span-4'>
      <ProductImage photo={photo} styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setFullScreen={setFullScreen} setIndex={setIndex} index={index}/>
      </div>

      <div className=' rounded-lg shadow-xl col-span-2'>
      <RatingsAndShare currentProduct={currentProduct} photo={photo}/>
      </div>


      <div className=' rounded-lg shadow-xl col-span-2 min-h-[60%]'>
      <ProductName currentProduct={currentProduct} styleSelected={styleSelected}/>
      </div>

      <div className=' rounded-lg shadow-xl col-span-2'>
      <Styles currentStyle={currentStyle} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected}/>
      </div>

      <div className=' rounded-lg shadow-xl col-span-2'>
      <AddCart />
      </div>

      </div>
      <div>
      <ProductDescription currentProduct={currentProduct}/>
      </div>
      </>
      }
      <div className='flex justify-center'>
        <Carosel className='flex-1' relative={relative}/>
        </div>
        </div>
      );
    }

    export default Overview;