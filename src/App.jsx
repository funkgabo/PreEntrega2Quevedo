import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemList } from './components/ItemList'
import { Item } from './components/Item'
import { SkeletonItem } from './components/SkeletonItem'

function App() {
  const [porducts, setPorducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setPorducts([
        {
          id: "1",
          name: "Pantalon",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 10,
        },
        {
          id: "2",
          name: "Buzo",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "3",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "4",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "5",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "6",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "7",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "8",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "9",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 0,
        },
        {
          id: "10",
          name: "Campera",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae velit quidem voluptas ipsa odio non quisquam aliquam.",
          stock: 12,
        },
      ])
      setLoading(false)
    }, 2000);
  }, [])
  const skeletonArray = new Array(11).fill(1)
  return (
    <>
      <NavBar />
      <ItemListContainer>
        <ItemList>
          {!loading ? porducts.map(producto => (
            <Item key={producto.id}
              id={producto.id}
              name={producto.name}
              description={producto.description}
              stock={producto.stock}
            />
          )) : <><SkeletonItem />
          </>
          }
        </ItemList>
      </ItemListContainer>
    </>
  )
}

export default App
