import React, { useContext, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'
import { CartContext } from '../../context/cartContext';

export const CartWidget = () => {
    const cartContext = useContext(CartContext)
    return (
        <div className='CardWidget-container'>
            <BsFillCartFill className='justify-content-end' style={{ color: '#b93939' }} size={30} />
            <span className='cartCount-value'>{cartContext.cartValue}</span>
        </div>
    );
}
