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



// // export const useCartContext = () => useContext(CartContext)

// export default function CartContextProvider ({children}) {
//     const [listaCompra, setListaCompra] = useState([])

//     // function agregarABolsa (item) {
//     //     setListaCompra([...listaCompra, item])
//     // }

//     return (
//         <CartContext.Provider value={{
//             listaCompra,
//             // agregarABolsa
//         }} >
//             {children}
//         </CartContext.Provider>
//     )
// }