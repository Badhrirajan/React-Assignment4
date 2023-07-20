import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => Promise,
  handleQuantity: () => null,
  handleDeleteToCart: () => null
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleQuantity(id = 0, type = ""){
    let cartsCopy = [...cart]
    let filteredData = cartsCopy.find((d) => d.id === id)
      if(type === 'dec' && filteredData.quantity > 1 ){
        filteredData.quantity -= 1
      } else if(type === 'inc') {
        filteredData.quantity += 1
      }
      setCart(cartsCopy)
    }
    
    function handleDeleteToCart(id = 0){
      let cartsCopy = [...cart]
      let matchedData = cartsCopy.filter((d) => d.id !== id);
      setCart(matchedData);
  }

  const value = {
    cart,
    setCart,
    handleQuantity,
    handleDeleteToCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


