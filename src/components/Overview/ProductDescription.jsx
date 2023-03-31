import React from 'react';

let ProductDescription = ({currentProduct}) => {
  return (
<<<<<<< HEAD
    <div className="product-description-container flex w-[1150px]" title='product-description'>
      <div className="grid h-20 flex-1 card rounded-box place-items-center w-[30%]">
        <h1 className="text-lg italic mb-2">{currentProduct.slogan}</h1>
        <p>{currentProduct.description}</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="grid h-20 flex-1 card rounded-box place-items-center">
        <ul>
          {currentProduct.features.map(feature => {
            return <li key={feature.feature}>-{feature.feature}: {feature.value}</li>
          })}
=======
<div className="flex w-[1150px]" title='product-description'>
  <div className="grid h-20 flex-1 card rounded-box place-items-center w-[30%]">
    <h1 className="text-lg italic mb-2">{currentProduct.slogan}</h1>
    <p>{currentProduct.description}</p></div>
  <div className="divider divider-horizontal"></div>
  <div className="grid h-20 flex-1 card rounded-box place-items-center">
    <ul>
      {currentProduct.features.map(feature => {
        return <li key={feature.feature}>•{feature.feature}: {feature.value}</li>
        })}
>>>>>>> 9dc29113854fcf32c51ce6d72ee077a9415698d4
        </ul>
      </div>
    </div>
  )
  }


  export default ProductDescription;
