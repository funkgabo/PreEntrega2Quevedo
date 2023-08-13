import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Logo from '../../assets/DS.svg'

export const Item = ({ products }) => {
  return (
    <Row xs={1} sm={2} lg={3} xl={4} xxl={5} className="g-4">
      {products.map(prod => (
        <Col key={prod.id}>
          <Card style={{ minHeight: '100%' }}>
            <Card.Img variant="top" src={prod.images} onError={(e) =>(
                (e.target.src =
                  "https://digital55.com/wp-content/uploads/2022/01/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png")
              )
            } style={{ height: 310, objectFit: 'cover' }} />
            <Card.Body style={{ minHeight: '180px' }}>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>${prod.price}</ListGroup.Item>
              <ListGroup.Item><Link to={`/Item/${prod.id}`}>Detail</Link></ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
