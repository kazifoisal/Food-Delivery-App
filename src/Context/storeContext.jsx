import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const url ="http://localhost:4000"

  const [token, setToken]= useState("");

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1 }));
  };

const getTotalAmount =()=>{
  let totalAmount = 0;
  for (const item in cartItems) {
    //cartItems[item] koita cart kora ase seta bujhai jemon cartItems[0] : 2   ekhane suppose item1 er 2 quantity add kora ase  
    if (cartItems[item]>0) {
     // food_list holo akta object jekhane value ase ar item holo index represent kore akhon food_list._id suppose 1 jodi item 1 soman hoi tahole find method dea easily grab korte parbo then . price dea easily price ber korte parbo cz akta object pabo return e 
      let itemInfo = food_list.find((product)=> product._id === item)
      totalAmount += itemInfo.price*cartItems[item]; //artItems[item] bolte bujhai kotogulo ase cart e ei single product aki product koita order korse ?
    }
  }
  return totalAmount;
}

  const ContextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    getTotalAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
