import React from 'react'

const ReactModal = ({handleCloseModal,cartItems,handleCartItemDecrease,handleCartItemIncrease}) => {
  const totalPrice = cartItems.reduce((accumulator, cartItem) => {
  return accumulator + cartItem.price*cartItem.selectionNo;
  }, 0);
  console.log(totalPrice);
  return (
    <dialog 
    className=' my-20 bg-red-400 rounded-xl w-2/6 '
    open
    >
    <div className='flex'>
      <h1 className='text-3xl font-bold my-2'>Your Cart</h1>
      <form action="" method='dialog' className='ml-auto'>
          <button  
          onClick={handleCloseModal}
          className='mt-2 font-bold text-xl bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 '
          >
          X
          </button>
      </form>
    </div>
    
    {cartItems.map((cartItem)=>{

    return (
    <div className='text-xl flex p-2 border-b border-gray-300' key={cartItem.id}>
          <div className='flex items-center'>
              <div>
                <h1 className='font-bold text-gray-800'>{cartItem.title}</h1>
                <p className='text-gray-600'>₹{cartItem.price}</p>
              </div>
          </div>

          <div className='flex items-center justify-end ml-auto'>
            <button onClick={()=>handleCartItemDecrease(cartItem.id,cartItem.selectionNo)}
            className='text-xl hover:bg-red-500 text-white font-bold px-4 rounded'>
              -
             </button>
              <p className='mx-2 text-2xl font-bold text-gray-800'>{cartItem.selectionNo}</p>
              <button onClick={()=>handleCartItemIncrease(cartItem.id)}
              className='text-xl hover:bg-red-500 text-white font-bold py-2 px-4 rounded'>
              +
              </button>
              <p className='mx-2 text-xl font-bold text-gray-800'>Subtotal ₹{cartItem.price*cartItem.selectionNo}</p>
          </div>
      </div>
      )})}
        <div className='flex items-center'>
          <p className='flex text-xl font-bold ml-auto text-gray-800'>Total : {totalPrice}</p>

          
        </div>
        
    </dialog>
  )
}

export default ReactModal