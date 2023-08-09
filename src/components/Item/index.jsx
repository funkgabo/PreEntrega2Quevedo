import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.css'

export const Item = ({ id, title, description, price, image }) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image} className='item' width={100} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{price}</small>
            </Card.Footer>
        </Card>
    );
}
