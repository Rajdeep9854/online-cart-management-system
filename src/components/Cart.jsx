import React, { useState } from 'react'
import ReactModal from './ReactModal'
const Cart = ({cartItems,handleCartItemDecrease,handleCartItemIncrease}) => {
   console.log(cartItems);
    const[showModal,setShowModal] = useState(false);
    function handleShowModal(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }
    return (
        <>  
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={handleShowModal}
               class="  mt-4 bg-blue-500 text-white px-4 
                        py-2 rounded-md hover:bg-blue-600 
                        focus:outline-none focus:shadow-outline-blue
                        active:bg-blue-800"
               >
                
                Cart {cartItems.length} Items
            </button>
            </li>
          </ul>
            {showModal && 
            <ReactModal 
            cartItems={cartItems}
            handleCloseModal={handleCloseModal}
            handleCartItemDecrease={handleCartItemDecrease}
            handleCartItemIncrease={handleCartItemIncrease}
            />}
        </div>
       
    </>
  )
}

export default Cart