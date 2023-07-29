import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemList } from './components/ItemList'
import { Item } from './components/Item'

function App() {
  const [porducts, setPorducts] = useState([])
  useEffect(() => {
    setPorducts([
      {
        id: "1",
        name: "Pantalon",
        description: "Pantalon de algodon negro",
        stock: 10,
      },
      {
        id: "2",
        name: "Buzo",
        description: "Buzo deportivo azul",
        stock: 0,
      },
      {
        id: "3",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "4",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "5",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "6",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "7",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "8",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
      {
        id: "9",
        name: "Campera",
        description: "Campera de jean",
        stock: 0,
      },
    ])
  }, [])
  return (
    <>
      <NavBar />
      <ItemListContainer>
        <ItemList>
          {porducts.map(producto => (
            <Item key={producto.id}
            id={producto.id}
            name={producto.name}
            description={producto.description}
            stock={producto.stock}
            />
          ))}
        </ItemList>
      </ItemListContainer>
    </>
  )
}

export default App
