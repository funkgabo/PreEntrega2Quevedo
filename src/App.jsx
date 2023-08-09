import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemList } from './components/ItemList'

function App() {

  
  return (
    <>
      <NavBar />
      <ItemListContainer>
        <ItemList />
      </ItemListContainer>
    </>
  )
}

export default App
