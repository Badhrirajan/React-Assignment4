import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => Promise,
  handleQuantity: () => null
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

  const value = {
    cart,
    setCart,
    handleQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


