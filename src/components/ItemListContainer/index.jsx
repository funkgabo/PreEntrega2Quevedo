import { useEffect, useState } from 'react';
import { SkeletonItem } from '../SkeletonItem';
import './ItemListContainer.css'
import { ItemList } from '../ItemList';
import { getData } from '../../data';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/app';

export const ItemListContainer = ({ category = '' }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const fetchData = async (category) => {
            try {
                const collectionRef = collection(firestore, 'productos');
                const snapshot = await getDocs(collectionRef)

                const fetchedData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                if(category){
                    const filteredData = fetchedData.filter(item => item.category === category)
                    setProducts(filteredData)
                } else {
                    setProducts(fetchedData)
                }
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
            fetchData(category)
    }, [category])
    return (
        <main className='main'>
            <h1 className='title' style={{ display: 'inline-block' }}>Catálogo de Productos</h1><span>{category}</span>
            {loading
                ? <SkeletonItem cards={12} />
                : <ItemList products={products} />}
        </main>
    );
}
