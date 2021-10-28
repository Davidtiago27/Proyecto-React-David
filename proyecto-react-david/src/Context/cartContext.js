import { useState, createContext, useContext } from "react";

export const cartContext = createContext([])

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        setCartList([...cartList, item])
    }

    console.log(cartList);
    
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart

        }} >
            {children}
        </cartContext.Provider>

    )
}
