

const CompareModal = ({modalVisable, setModal, clickedProduct,clickedProductStyle, currentProduct, styleSelected}) => {
  let handleClose = () => {
    setModal(false);
  }
  if (!modalVisable) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded">
        <div>
          <h1 className="italic">Compare the product!</h1>

          <div className="overflow-x-auto">
            <table className="table w-full">

              {/* head */}
              <thead>
                <tr className="text-center ">

                  <th>{currentProduct.name}</th>
                  <th></th>
                  <th>{clickedProduct.name}</th>
                  </tr>
                  </thead>

                  <tbody>
                    {/* row 1 */}
                    <tr className="text-center">

                      <td>{currentProduct.category}</td>
                      <td className="border-2 border-x">Category</td>
                      <td>{clickedProduct.category}</td>

                      </tr>
                      {/* row 2 */}
                      <tr className="text-center">

                        <td>{styleSelected.original_price}$</td>
                        <td className="border-2 border-x">Price</td>
                        <td>{clickedProductStyle.original_price}$</td>

                        </tr>
                        {/* row 3 */}
                        <tr className="text-center">

                          { styleSelected.sale_price ?
                          <td>✔️ {styleSelected.sale_price}$</td>
                          : <td></td>
                          }
                          <td className="border-0 border-x">On Sale?</td>
                          { clickedProductStyle.sale_price ?
                          <td>✔️ {clickedProductStyle.sale_price}$</td>
                          : <td></td>
                          }

                          </tr>
                          </tbody>


                          </table>
                          </div>
                          <button onClick={handleClose}>Close</button>
                          </div>
                          </div>
                          </div>
                          )
                        }

export default CompareModal;