import { Profiler, useEffect, useState } from 'react';
import { SkeletonItem } from '../SkeletonItem';
import './ItemListContainer.css'
import { ItemList } from '../ItemList';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(console.error())
            .finally(setLoading(false))
    }, [])
    return (
        <main className='main'>
            <h1 className='title'>Catálogo de Productos</h1>
            {loading
                ? <SkeletonItem />
                : <ItemList porducts={products} />}

        </main>
    );
}
