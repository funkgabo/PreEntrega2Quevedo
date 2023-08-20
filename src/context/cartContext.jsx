import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    const addCartValue = (product) => {
        setCartProducts(([...cartProducts, product]))
        setCartValue(cartProducts.length + 1)
    }
    return (
        <CartContext.Provider value={{
            cartValue,
            cartProducts,
            addCartValue,
        }}>
            {children}
        </CartContext.Provider>
    )
}
