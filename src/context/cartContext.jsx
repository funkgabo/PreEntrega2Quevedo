import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    const addCartValue = (product) => {
        setCartProducts(([...cartProducts, ...product]))
    }
    const deleteCartValue = (ProductsArray, product) => {
        const index = ProductsArray.findIndex(prod => prod.id === product.id)
        if (index !== -1) {
          const newArray = ProductsArray.slice();
          newArray.splice(index, 1);
          setCartProducts(newArray)
        }
      }
    useEffect(() => {
        setCartValue(cartProducts.length)
    }, [cartProducts])
    return (
        <CartContext.Provider value={{
            cartValue,
            cartProducts,
            addCartValue,
            deleteCartValue,
        }}>
            {children}
        </CartContext.Provider>
    )
}
