import { createContext, useState, useEffect } from "react"
import { collection, addDoc } from "firebase/firestore"
import { firestore } from "../firebase/app"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [orderId, setOrderId] = useState('')

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

    const clearCart = () => {
        setCartProducts([])
    }
    const clearOrderId = () => {
        setOrderId('')
    }

    const createOrder = async (cartProducts, buyer, total) => {
        const order = {
            buyer,
            items: cartProducts,
            total
        }
        const docRef = await addDoc(collection(firestore, "orders"), order)
        setOrderId(docRef.id)
        clearCart()
    }

    useEffect(() => {
        setCartValue(cartProducts.length)
    }, [cartProducts])
    return (
        <CartContext.Provider value={{
            cartValue,
            cartProducts,
            orderId,
            addCartValue,
            deleteCartValue,
            clearCart,
            createOrder,
            clearOrderId,
        }}>
            {children}
        </CartContext.Provider>
    )
}
