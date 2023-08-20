import { useParams } from "react-router"
import Form from 'react-bootstrap/Form'
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from "react"
import { getData } from '../../data'
import Skeleton from "react-loading-skeleton"
import { CartContext } from "../../context/cartContext"

export const ItemDetailContainer = () => {
    const updateCart = useContext(CartContext)
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const [products, setProducts] = useState([])
    const [shopData, setShopData] = useState([])

    const addingCartHandler = () => {
        setQuantity(quantity + 1)
        const prod = [...products]
        prod.push({id: shopData.id, price: shopData.price, name: shopData.name})
        setProducts(prod)

    }
    const subCartHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            const subProds = [...products]
            subProds.pop()
            setProducts(subProds)
        }
    }
    const pushToCart = () => {
        console.log(updateCart.cartProducts)
    }

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
                            <Button variant="primary" onClick={() => { updateCart.addCartValue(products) }}>Add to Cart</Button>{' '}
                            <Button variant="secondary" onClick={subCartHandler}>-</Button>{' '}
                            <div className='NumberFormContainer'>
                                <Form.Label htmlFor="inputProducts">Quantity</Form.Label>
                                <Form.Control placeholder="0"
                                    type="number" min={1} value={quantity} onChange={() => { }}
                                    id="inputProducts"
                                />
                            </div>{' '}
                            <Button variant="secondary" onClick={addingCartHandler}>+</Button>{' '}
                            <Button variant="success" onClick={pushToCart}>Go to Cart</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Stock</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
