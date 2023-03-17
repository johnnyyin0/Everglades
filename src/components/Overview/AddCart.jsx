const AddToCart = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
    <div className="dropdown col-span-1">
  <label tabIndex={0} className="btn m-1">Select Size</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    <div className="dropdown col-span-1">
    <label tabIndex={0} className="btn m-1">QTY</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  <button className="btn m-1 col-span-1">Add to Cart</button>
  <button className="btn m-1 col-span-1">✰</button>
    </div>
  )
}

export default AddToCart;