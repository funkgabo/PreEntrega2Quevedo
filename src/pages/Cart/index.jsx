import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CartContext } from '../../context/cartContext'
import './Cart.css'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"

export const Cart = () => {
    const cartInfo = useContext(CartContext)
    function removeDuplicatesAndCount(inputArray) {
        const countMap = {};

        inputArray.forEach(obj => {
            const key = JSON.stringify(obj);
            countMap[key] = (countMap[key] || 0) + 1;
        });

        const resultArray = [];
        for (const key in countMap) {
            if (countMap.hasOwnProperty(key)) {
                const obj = JSON.parse(key);
                obj.units = countMap[key];
                resultArray.push(obj);
            }
        }
        return resultArray;
    }

    const cartProducts = removeDuplicatesAndCount(cartInfo.cartProducts)
    const totalPrice = cartProducts.map(prod => prod.price * prod.units).reduce((a, b) => a + b, 0)
    return (
        <Card className="text-center">
            <Card.Header>Cart</Card.Header>
            {cartProducts.length ? cartProducts.map(prod => (
                <Card.Body key={prod.id} className='bodyCard'>
                    <Card.Title className='nameCart'>{prod.name}</Card.Title>
                    <Card.Text>
                        Units: {prod.units} <FaArrowCircleUp className='unitsModifyButton' onClick={() => cartInfo.addCartValue([{ id: prod.id, price: prod.price, name: prod.name }])} />{' '}
                        <FaArrowCircleDown className='unitsModifyButton' onClick={() => cartInfo.deleteCartValue(cartInfo.cartProducts, { id: prod.id, price: prod.price, name: prod.name })} />
                    </Card.Text>
                    <Card.Text>
                        Price: ${prod.price}
                    </Card.Text>
                    <Card.Text>
                        Total: ${prod.price * prod.units}
                    </Card.Text>
                </Card.Body>
            ))
                : <Alert variant='danger'>
                    You have no Products in the Cart
                </Alert>}
            <Card.Footer className="text-muted">TOTAL ${totalPrice}
            </Card.Footer>
            {cartProducts.length ? <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="success">Continuing Shopping</Button>{' '}<Button variant="primary">Checkout</Button></Link>
            </Card.Footer>
                : <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="success">Go to Shop</Button></Link>
                </Card.Footer>}

        </Card>
    );
}