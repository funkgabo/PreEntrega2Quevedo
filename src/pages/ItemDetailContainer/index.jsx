import { json, useParams } from "react-router"
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"
import { getData } from '../../data'
import Skeleton from "react-loading-skeleton"

export const ItemDetailContainer = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        setLoading(true)
        getData()
            .then(data => {
                const findData = data.find(item => item.id === Number(params.id))
                setShopData(findData)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <NavBar />
            {loading
                ? <Skeleton cards={1} />
                : <article>
                    <Card className="text-center" style={{ width: '42rem' }}>
                        <Card.Header>{shopData.name}</Card.Header>
                        <Card.Body>
                        <Card.Img variant="top" src={''} onError={(e) => (
                            (e.target.src =
                              "https://digital55.com/wp-content/uploads/2022/01/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png")
                          )
                          } style={{ height: 310, objectFit: 'cover' }} />
                            <Card.Title>${shopData.price}</Card.Title>
                            <Card.Text>
                                {shopData.description}
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>{' '}
                            <Button variant="success">Buy Now</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Stock</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
