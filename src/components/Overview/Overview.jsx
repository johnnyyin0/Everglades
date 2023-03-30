import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import exampleStyle from './exampleStyle.js';
import ProductName from './productName.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImage from './ProductImage.jsx';
import FullScreen from './FullScreen.jsx';
import AddCart from './AddCart.jsx';
import RatingsAndShare from './RatingsAndShare.jsx';
import Carosel from './Carosel.jsx';
import Styles from './styles.jsx';

let Overview = () => {
  let productId = window.location.pathname.slice(1) || 37311;


  // useEffect(() => {
    //   Axios.get('http://localhost:3000/cart')
    //   .then(res => console.log(res.data, 'Items in your cart!'))
    //   .catch(err => console.log(err));
    // }, [refresh])
    //states

    //loading state
    let [isLoading, notLoading] = useState(true);
    let [refresh, setRefresh] = useState(1);

    let [products, setProducts] = useState([]);

    //skus array for the size and quantity of products
    let [skusArray, setSkusArray] = useState([])
    //array of all the products from api
    let [currentProduct, setCurrentProduct] = useState([]);

    //all the styles from
    let [currentStyle, setCurrentStyle] = useState([]);

    //index of photo currently selected on
    let [index, setIndex] = useState(0);

    //true false for fullscreen modal
    let [isFullScreen, setFullScreen] = useState(false);

    //state to be "selected" when picture is showing on overview
    let [styleSelected, setSelectedStyle] = useState(currentStyle[0])

    let [photo, setPhoto] = useState([]);


    //relative and outfits are the arrays the carousel iterates through
    let [relative, setRelative] = useState([]);

    //array of style objects
    let [outfits, setOutfits] = useState([]);

    //array of ids
    let [outfitsId, setOutfitsId] = useState([]);

    let [deleted, setDeleted] = useState(1);


    //function that takes productId and adds it to the outfit list, and then local storage
    let addOutfit = (id) => {
      localStorage.setItem('outfits', JSON.stringify([id, ...outfitsId]))
      setRefresh(refresh + 1);
    }

    let deleteOutfit = (id) => {
      let index = outfitsId.indexOf(id);
      let outfitCopy = [...outfitsId];
      outfitCopy.splice(index, 1);
      localStorage.setItem('outfits', JSON.stringify([...outfitCopy]))
      setRefresh(refresh + 1);
    }
    useEffect(()=> {
      let outfitArray = JSON.parse(localStorage.getItem("outfits"));
      if (Array.isArray(outfitArray)) {
        setOutfitsId(outfitArray);
      }
    }, [refresh]);


    //function to add to cart via POST
    let addCartFunc = (obj) => {
      console.log(obj, 'Whats getting sent to the cart');
      Axios.post('api/cart', obj)
      .then(res => setRefresh(res))
      .catch(err => console.log(err));
    };

    //function to get to quantity and sizes of api

    let createSkusArray = (skus) => {
      let newArr = [];
      let skusKeys = Object.keys(skus);
      skusKeys.forEach(id => {
        newArr.push(skus[id])
      })
      setSkusArray(newArr);
    };
  //useEffect
  useEffect(() => {
    Axios.get('api/products')
    .then(res => {
      setProducts(res.data)})
      .catch(err => console.log('Failed to load products'));
    }, [])


    // When the currentId changes, change the current data
    useEffect(() => {
      Axios.get(`api/product/${productId}`)
      .then(res => setCurrentProduct(res.data))
      .catch(err => console.log('Failed to load product'))
    }, [])

    useEffect(() => {
      // console.log(productId);
      Axios.get(`api/product/${productId}/styles`)
        .then(res => {
          setCurrentStyle(res.data.results);
          setSelectedStyle(res.data.results[0]);
          createSkusArray(res.data.results[0].skus);
          setPhoto(res.data.results[0].photos[0].url);
          notLoading(false);
        })
        .catch(err => {
          console.log('Failed to load product styles');
          notLoading(false);
        });
    }, []);

    let relativeIdNumbers = [];
    useEffect(() => {
      // Check if the response for the given productId is already cached in localStorage
      const cachedData = localStorage.getItem(`product${productId}related`);
      if (cachedData) {
        setRelative(JSON.parse(cachedData));
      } else {
        Axios.get(`api/product/${productId}/related`)
          .then(res => {
            relativeIdNumbers = [...res.data];
            return relativeIdNumbers
          })
          //iterate over the relativeIdNumbers, do a axios get request on each id
          .then(idArray => {
            let relativeItems = [];
            idArray.forEach(id => {
              // console.log(id);
              Axios.get(`api/product/${id}/styles`)
              .then(res => {
                //adding product id to the style
                res.data.results[0].productId = id;
                relativeItems.push(res.data.results[0]);
                // Check if all the API calls are complete
                if (relativeItems.length === idArray.length) {
                  setRelative(relativeItems);
                  // Cache the API response for the given productId
                  localStorage.setItem(`product${productId}related`, JSON.stringify(relativeItems));
                  setRefresh(res);
                }
              })
            })
          });
      }
    }, [productId]);

    useEffect(() => {
      setOutfits([]);
      outfitsId.forEach(id => {
        // Check if the response for the given outfitId is already cached in localStorage
        const cachedData = localStorage.getItem(`product${id}styles`);
        if (cachedData) {
          setOutfits(outfits => [...outfits, JSON.parse(cachedData)]);
        } else {
          Axios.get(`api/product/${id}/styles`)
          .then(res => {
            //adding product id to the style
            res.data.results[0].productId = id;
            setOutfits(outfits => [res.data.results[0], ...outfits]);
          // Cache the API response for the given outfitId
            localStorage.setItem(`product${id}styles`, JSON.stringify(res.data.results[0]));
          })
        }
      })
    }, [outfitsId]);

      //buttons to change profile index
      const nextButton = () => {
        let lastButton = index === styleSelected.photos.length - 1;
        let newIndex = lastButton ? 0 : index + 1;
        setIndex(newIndex);
        setPhoto(styleSelected.photos[newIndex].url)
      }

      const backButton = () => {
        let firstButton = index === 0;
        let newIndex = firstButton ? styleSelected.photos.length - 1 : index - 1;
        setIndex(newIndex);
        setPhoto(styleSelected.photos[newIndex].url)
      }


      //check if the page is done loading or not to render
      if (isLoading) {
        return <p>Loading</p>
      }

  return (
    <div className='pt-16'>
    { isFullScreen ?
      <FullScreen setFullScreen={setFullScreen} styleSelected={styleSelected} index={index} setIndex={setIndex} setPhoto={setPhoto} nextButton={nextButton} backButton={backButton}/>
      :
      <>
      <div className='flex justify-center '>
      <div className="grid grid-cols-6 gap-2 min-h-[600px] max-h-[600px] max-w-[1200px]" >
      <div className='rounded-lg content-end col-span-4 row-span-4'>
      <ProductImage photo={photo} styleSelected={styleSelected} setPhoto={setPhoto} setFullScreen={setFullScreen} setIndex={setIndex} index={index} nextButton={nextButton} backButton={backButton}/>
      </div>

      <div className=' col-span-2 w-[420px] h-[100%] border-b'>
      <RatingsAndShare currentProduct={currentProduct} photo={photo}/>
      </div>


      <div className=' rounded-lg shadow-lg pt-3 col-span-2 h-[100%] w-[420px]'>
      <ProductName currentProduct={currentProduct} styleSelected={styleSelected}/>
      </div>

      <div className='rounded-lg pt-8 shadow-lg col-span-2 w-[420px] h-[260px] overflow-y-auto'>
      <Styles currentStyle={currentStyle} setPhoto={setPhoto} setSelectedStyle={setSelectedStyle} styleSelected={styleSelected} createSkusArray={createSkusArray}/>
      </div>

      <div className='rounded-lg shadow-lg  col-span-2 w-[420px] h-[160px]'>
      <AddCart styleSelected={styleSelected} skusArray={skusArray} addCartFunc={addCartFunc}/>
      </div>

      </div>
      </div>
      <div className='flex justify-center pt-[150px]'>
      <ProductDescription className='flex-1' currentProduct={currentProduct}/>
      </div>
      </>
      }
      <div className='flex justify-center' style={{marginTop:'60px', fontSize:'20px', marginBottom:'10px'}}><b>RELATED PRODUCTS</b></div>
      <div className='flex justify-center'>
        <Carosel className='flex-1' relative={relative} currentProduct={currentProduct} styleSelected={styleSelected} outfitCarousel={false} outfitsId={outfitsId} addOutfit={addOutfit} deleteOutfit={deleteOutfit}/>
        </div>
        <div className='flex justify-center' style={{marginTop:'10px', fontSize:'20px', marginBottom:'10px'}}><b>YOUR OUTFITS</b></div>
        <div className='flex justify-center'>
        <Carosel className='flex-1' relative={outfits} currentProduct={currentProduct} styleSelected={styleSelected} outfitCarousel={true} outfitsId={outfitsId} addOutfit={addOutfit} deleteOutfit={deleteOutfit}/>
        </div>
        </div>
      );
    }

    export default Overview;