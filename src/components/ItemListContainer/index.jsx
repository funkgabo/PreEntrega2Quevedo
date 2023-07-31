import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ children }) => {
    return (
        <main className='main'>
        <h1 className='title'>Catálogo de Productos</h1>
            {children}
        </main>
    );
}
