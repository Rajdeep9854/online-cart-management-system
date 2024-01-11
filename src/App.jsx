
import { useState } from 'react';

import Header from './components/Header'
import Store from './components/Store'
import { productArray } from './Product-Items';


function App() {
const [cartItems , setCartItems] = useState([]);
function handleAddCart(id){
  let found=0;
  const newCartItems= cartItems.map((cartItem)=>{
    if(cartItem.id===id){
      cartItem.selectionNo+=1;
      found=1;
      return cartItem;
    }
    else{
      return cartItem;
    }
  })
  if(!found){
    const product= productArray.find((product)=>product.id===id)
    const item = {
    id : id,
    selectionNo : 1,
    title : product.title,
    price : product.price
  }
  setCartItems((prevCartItems)=>{  
  return [...prevCartItems,item]
  })
  }
  else{
    setCartItems(newCartItems);
  }}

  function handleCartItemDecrease(id,selectionNo){
      if(selectionNo===1 ){
        setCartItems((prevCartItems)=>{
          const updatedItems = prevCartItems.filter(prevCartItem=>prevCartItem.id!==id)
          return updatedItems;
        })
      }else{
          const newCartItems = cartItems.map((cartItem)=>{
          if(cartItem.id === id){
            cartItem.selectionNo-=1;
            return cartItem;
          }
          else {
            return cartItem;
          }
    })
      setCartItems(newCartItems)
  }
  }
    
  
  function handleCartItemIncrease(id){
    //console.log(id);
    
    const newCartItems = cartItems.map((cartItem)=>{
      if(cartItem.id === id){
        cartItem.selectionNo+=1;
        return cartItem;
      }
      else {
        return cartItem;
      }
    })
    setCartItems(newCartItems)
  }

  return (
    
    <div>
      <Header 
      handleCartItemDecrease={handleCartItemDecrease}
      handleCartItemIncrease={handleCartItemIncrease}
      cartItems={cartItems}
      />
      <Store handleAddCart={handleAddCart}  />
    </div>
  )
  
}

export default App
