import './item.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const Item = ({ id, name, description, stock }) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Stock {stock}</small>
            </Card.Footer>
        </Card>
    );
}
