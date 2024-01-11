import React from 'react'
import { productArray } from '../Product-Items'
import ProductCard from './ProductCard'

const Store = ({handleAddCart}) => {

  return (
    < >  
    <h1 className=' text-center text-3xl my-6'>Welcome to the store</h1>
      <div className=" mx-auto  w-2/3 flex flex-wrap justify-center items-center ">

      {productArray.map((product,id)=>{
        return (
        <div 
        className="p-5 m-4  text-lg  font-bold bg-slate-400"
        >
        <ProductCard 
          handleAddCart={handleAddCart}
          title={product.title} 
          price={product.price} 
          id={product.id}  
        />
        
        </div>)
      })}
    </div>
    </>
  )
}

export default Store