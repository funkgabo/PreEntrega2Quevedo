import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { CartWidget } from './components/CartWidget'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  const greetirngs = 'Bienvenidos'
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetirngs} />
    </>
  )
}

export default App
