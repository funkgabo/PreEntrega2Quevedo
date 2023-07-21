import React from 'react'

export const ItemListContainer = ({greetings}) => {
    return (
        <h1 style={{minHeight: 'calc(100vh - 71px)', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{greetings}</h1>
    );
}
