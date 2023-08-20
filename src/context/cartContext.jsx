import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    const addCartValue = (product) => {
        setCartProducts(([...cartProducts, ...product]))
    }
    useEffect(() => {
        setCartValue(cartProducts.length)
    }, [cartProducts])
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
