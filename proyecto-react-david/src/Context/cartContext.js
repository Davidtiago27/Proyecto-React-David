import { useState, createContext, useContext } from "react";

export const cartContext = createContext([])

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        

        if (cartList.some (i => i.item.id === item.item.id)) {
            cartList.find(i => i.item.id === item.item.id).quantity += item.quantity
            setCartList(cartList)
            } else {
            setCartList( [...cartList, item ] )
            }
    }

    const countCart = () => {
        return cartList.reduce ( (acum, valor)=> acum + valor.quantity, 0  )
    }

    const eliminarProducto = (item) => {

        const eliminar = cartList.filter((prod)=> prod.item.id !== item.item.id);

        setCartList([...eliminar])
    }

    const totalDeCompra =()=>{   
    return  cartList.reduce(
        (sum, item) => sum + item.quantity * item.item.Precio,
        0)}

   

    const borrarCart=()=>{
        setCartList([])
    }  

    
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            countCart,
            totalDeCompra,
            eliminarProducto,
            borrarCart

        }} >
            {children}
        </cartContext.Provider>

    )
}
