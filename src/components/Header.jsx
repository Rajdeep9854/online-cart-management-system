
import Cart from './Cart';
const Header = ({cartItems,handleCartItemDecrease,handleCartItemIncrease}) => {
return (
  <>  
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce Store</span>
        </a>
        
        <Cart 

        cartItems={cartItems}
        handleCartItemDecrease={handleCartItemDecrease}
        handleCartItemIncrease={handleCartItemIncrease}
        />
      </div>
</nav>


</>
)
}

export default Header