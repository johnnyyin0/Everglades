
import {useState} from 'react';

const AddToCart = ({styleSelected, skusArray, addCartFunc}) => {
  let [isFavorited, setFavorite] = useState(false);

  let [qty, setQty] = useState(2);
  let [redSelectSize, setRedSelectSize] = useState(false);
  let [redSelectQty, setRedSelectQty] = useState(false);

  let [selectSize, setSelectSize] = useState('Select Size');
  let [selectQty, setSelectQty] = useState('-');
  let [qtyAvailable, setqtyAvailable] = useState(false);

  let [formData, setForm] = useState({
    sku_id: "",
    count: 0
  });

  let handleSubmit = (e) => {
    e.preventDefault();

    //if form is empty, make the buttons background red
    if (formData.sku_id === '') {
      setRedSelectSize(true);
    }
    if (formData.count === 0) {
      setRedSelectQty(true)
    }

    //check so the form isn't empty
    if (formData.sku_id.length !== 0 && formData.count !== 0) {
      setRedSelectQty(false);
      setRedSelectSize(false);
      addCartFunc(formData);
    }

  };

  let handleQty = (num) => {
    setRedSelectQty(false)
    setSelectQty(num);
    setForm({...formData, count: num});
  };

  let handleSize = (input) => {
    setRedSelectSize(false);
    setqtyAvailable(true);
    setSelectSize(input);
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
    <div className="grid grid-cols-4 gap-4 pb-6" title="add-cart">
      <div className="dropdown col-span-2 pl-6">

        { redSelectSize ?
       <p className='text-rose-700 text-center'>Please Select a Size</p>
       : null
       }

        <label tabIndex={0} className={!redSelectSize ? "btn m-1 w-[315px]" : 'btn btn-error w-[315px]'}>{selectSize}</label>

       <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <div>
          {skusArray.map((size, index) => {
            return <li key={index}><a onClick={(e) => handleSize(size.size)}>{size.size}</a></li>
            })}
            </div>
            </ul>
            </div>
            <div className="dropdown col-span-1 pl-11">

              { redSelectQty ?
              <p className='text-rose-700 text-center whitespace-nowrap'>Please Select a Quantity</p>
              : null
              }
              <label tabIndex={0} className={!redSelectSize ? "btn m-1 w-[240px]" : 'btn btn-error w-[240px]'}>{selectQty}</label>

              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                { qtyAvailable ?
                  <div>
                  {Array.from(Array(qty), (element, index) =>
                    <li key={index}><a onClick={(e) => handleQty(index + 1)}>{index + 1}</a></li>
                    )}
                    </div>
                    : null
                  }

                </ul>
                </div>
                <div className="pl-6 col-span-2">
                  <button type="submit" className="btn m-1 w-[370px]">Add to Cart</button>
                  </div>
                  <div className="pl-[100px] col-span-2">
                    {isFavorited ?
                    <button type="reset" onClick={handleUnfavorite} className="btn m-1 w-[183px]">★</button>
                    : <button type="reset" onClick={handleFavorite} className="btn m-1 w-[183px]">✰</button>
                    }
                    </div>
                    </div>
                    </form>
                    )
                  }

export default AddToCart;