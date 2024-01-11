import React from 'react'

const ProductCard = ({title,price,id,handleAddCart}) => {
  return (
<div className="max-w-sm border  border-gray-300 p-6 rounded-md shadow-md hover:shadow-lg">
  <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  <p className="text-gray-600 mt-2">₹{price}</p>
  <button
    onClick={() => handleAddCart(id)}
    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    + Add to Cart
  </button>
</div>

  )
}

export default ProductCard