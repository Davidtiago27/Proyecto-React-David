import { useState, createContext, useContext } from "react";

export const cartContext = createContext([])

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        // setCartList([...cartList, item])

        if (cartList.some (i => i.item.id === item.item.id)) {
            cartList.find(i => i.item.id === item.item.id).quantity += item.quantity
            setCartList(cartList)
            } else {
            setCartList( [...cartList, item ] )
            }
    }

    //console.log(cartList);

    // const addToCart = (dato) => {
    //     // let previousCart = [...carList]
    //     if (previousCart.some (i => i.item.id === data.item.id)) {
    //     previousCart. find(i => i.item.id === data.item.id).quantity += data.quantity
    //     setCarList(previousCart)
    //     } else {
    //     setCarList( [...carList, data ] )
    //     }
    // }
    
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart

        }} >
            {children}
        </cartContext.Provider>

    )
}
