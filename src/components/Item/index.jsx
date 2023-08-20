import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'

export const Item = ({ id, description, price, name }) => {
  const increaseCart = useContext(CartContext)
  return (
    <Col>
      <Card style={{ minHeight: '100%' }}>
        <Card.Img variant="top" src={''} onError={(e) => (
          (e.target.src =
            "https://digital55.com/wp-content/uploads/2022/01/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png")
        )
        } style={{ height: 310, objectFit: 'cover' }} />
        <Card.Body style={{ minHeight: '180px' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${price}</ListGroup.Item>
          <ListGroup.Item><Link to={`/Item/${id}`}>Detail</Link></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={()=>{increaseCart.addCartValue([id, price, name])}}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
