import { useParams } from "react-router"
import Form from 'react-bootstrap/Form'
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { CartContext } from "../../context/cartContext"
import { collection, doc, getDoc } from "firebase/firestore"
import { firestore } from "../../firebase/app"
import { Link } from "react-router-dom"

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
        prod.push({ id: shopData.id, price: shopData.price, name: shopData.name })
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

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, "productos", params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setShopData(docSnap.data())
                    setLoading(false)
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
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
                                <Form.Control
                                    type="number" min={1} value={quantity} onChange={() => { }}
                                    id="inputProducts"
                                />
                            </div>{' '}
                            <Button variant="secondary" onClick={addingCartHandler}>+</Button>{' '}
                            <Link to={'/Cart'}><Button variant="success">Go to Cart</Button></Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Stock</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
