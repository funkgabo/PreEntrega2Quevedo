import './ItemList.css'
import { Item } from '../Item';

import Row from 'react-bootstrap/Row'

export const ItemList = ({ products }) => {
    return (
    <Row xs={1} sm={2} lg={3} xl={4} xxl={5} className="g-4">
        {products.map(item => (
            <Item key={item.id} id={item.id} description={item.description} price={item.price} name={item.name} />
        ))}
    </Row>

    );
}
