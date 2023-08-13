import './ItemList.css'
import { Item } from '../Item';

export const ItemList = ({ products }) => {
    return (
        <Item products={products} />
    );
}
