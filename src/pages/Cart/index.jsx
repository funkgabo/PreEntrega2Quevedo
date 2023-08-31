import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CartContext } from '../../context/cartContext'
import './Cart.css'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"
import { useUniqueObjectsWithQuantity } from '../../hooks/useUniqueObjectsWithQuantity'
import { Layout } from '../../components/Layout'

export const Cart = () => {
    const cartInfo = useContext(CartContext)

    const [cartProducts, totalPrice] = useUniqueObjectsWithQuantity(cartInfo.cartProducts)
    return (
        <Layout>
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
            {cartProducts.length ? <Card.Footer className="text-muted"><Button variant="success" onClick={cartInfo.clearCart}>Clear Cart</Button>{' '}<Link to='/Checkout'><Button style={{ width: '100%', marginTop: '5px' }} variant="primary">Checkout</Button></Link>
            </Card.Footer>
                : <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="success">Go to Shop</Button></Link>
                </Card.Footer>}

        </Card>
        </Layout>
    );
}