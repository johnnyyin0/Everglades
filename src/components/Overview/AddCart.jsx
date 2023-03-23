import {useState} from 'react';

const AddToCart = ({styleSelected, skusArray, addCartFunc}) => {
  let [isFavorited, setFavorite] = useState(false);

  let [qty, setQty] = useState(2);

  let [formData, setForm] = useState({
    sku_id: "",
    count: ""
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    addCartFunc(formData);
  };

  let handleQty = (num) => {
    setForm({...formData, count: num});
  };

  let handleSize = (input) => {
    // console.log(input)
    let skusObject = styleSelected.skus;
    Object.keys(skusObject).forEach(id => {
      if ( skusObject[id].size === input ) {
        setForm({...formData, sku_id: id});
        setQty(skusObject[id].quantity);
      }
    })
  };

  let handleFavorite = () => {
    setFavorite(true)
  };

  let handleUnfavorite = () => {
    setFavorite(false)
  };

  return (
      <form onSubmit={(e) => handleSubmit(e)}>
    <div className="grid grid-cols-4 gap-4">
    <div className="dropdown col-span-2">
  <label tabIndex={0} className="btn m-1 w-[90%] ml-6 ">Select Size</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <div className>
    {skusArray.map((size, index) => {
      return <li><a onClick={(e) => handleSize(size.size)}>{size.size}</a></li>
    })}
    </div>
  </ul>
</div>
    <div className="dropdown col-span-1">
    <label tabIndex={0} className="btn m-1 w-[85%]">QTY</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    {Array.from(Array(qty), (element, index) =>
      <li><a onClick={(e) => handleQty(index + 1)}>{index + 1}</a></li>
   )}
    </ul>
  </div>
  <button type="submit" className="btn m-1 col-span-2 w-[100%] ml-6">Add to Cart</button>
  {isFavorited ?
  <button type="reset" onClick={handleUnfavorite} className="btn m-1 col-span-1 ml-10 w-[60%]">★</button>
   : <button type="reset" onClick={handleFavorite} className="btn m-1 col-span-1 ml-10 w-[60%]">✰</button>
  }
    </div>
    </form>
  )
}

export default AddToCart;