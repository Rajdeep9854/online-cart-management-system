import React from 'react'

const ProductCard = ({title,price,id}) => {
  return (
    <div class=" ">
    <h2 class="text-xl font-semibold text-gray-800">
    {title}
    </h2>
    <p class="text-gray-800 mt-2">
    ₹{price}
    </p>
    <button 
    class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
    +CART
    </button>
  </div>
  )
}

export default ProductCard