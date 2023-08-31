import { useContext, useState } from 'react';
import { InputForm } from '../../components/InputForm';
import './Checkout.css'
import { Button } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import { CartContext } from '../../context/cartContext';
import { useUniqueObjectsWithQuantity } from '../../hooks/useUniqueObjectsWithQuantity';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    const contextInfo = useContext(CartContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const onChangeInput = (event, setValue) => {
        setValue(event.target.value)
    }

    const [products, totalPrice] = useUniqueObjectsWithQuantity(contextInfo.cartProducts)

    const handleConfirm = (event) => {
        event.preventDefault()
        contextInfo.createOrder(contextInfo.cartProducts, { name, phone, email }, totalPrice)
    }
    const goBack = () => {
        contextInfo.clearOrderId()
        contextInfo.clearCart()
    }

    return (<>
        {!contextInfo.orderId ? <main className="checkoutContainer">
            <h1>CHECKOUT</h1>
            <form onSubmit={handleConfirm}>
                <InputForm onChange={(event) => onChangeInput(event, setName)} value={name} label={'name'} />
                <InputForm onChange={(event) => onChangeInput(event, setPhone)} value={phone} label={'phone'} />
                <InputForm onChange={(event) => onChangeInput(event, setEmail)} type='email' value={email} label={'email'} />
                <Button type='submit' disabled={!(name !== '' && phone !== '' && email !== '') || (contextInfo.cartProducts.length < 1)} style={{ margin: '0 auto' }} variant='primary'>Buy</Button>
            </form>
            <h2>Total Price: ${totalPrice}</h2>
        </main>
            : <main className="checkoutContainer"><h1>Order ID: </h1> <h3> {contextInfo.orderId}</h3><Link to={'/'}><Button onClick={goBack} variant='primary'>Volver</Button></Link></main>}</>
    );
}
