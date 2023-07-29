import React, { useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'

export const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0)
    return (
        <div className='CardWidget-container'>
            <BsFillCartFill className='justify-content-end' style={{ color: '#b93939' }} size={30} />
            <span className='cartCount-value'>{cartCount}</span>
        </div>
    );
}
