
import { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CartContext, CartProvider } from '../../context/cartContext';

export const Cart = () => {
    const cartInfo = useContext(CartContext)
    const check = () => {
        console.log(cartInfo.cartProducts)
    }
    return (
        <Card className="text-center">
            <Card.Header>Cart</Card.Header>
            <Card.Body style={{display: 'flex', justifyContent: 'space-around'}}>
                <Card.Title>{cartInfo.cartProducts[0][2]}</Card.Title>
                <Card.Text>
                Units: {/* cartInfo.cartProducts[0][1] */}
                </Card.Text>
                <Card.Text>
                Price: ${/* cartInfo.cartProducts[0][1] */}
                </Card.Text>
                <Card.Text>
                    Price: {/* cartInfo.cartProducts[0][1] */}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"><Button onClick={check} variant="primary">Go somewhere</Button>
            </Card.Footer>
        </Card>
    );
}