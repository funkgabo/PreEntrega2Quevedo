import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import { Category } from './pages/Category'
import { ItemDetailContainer } from './pages/ItemDetailContainer/index.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { Cart } from './pages/Cart/index.jsx'
import { Checkout } from './pages/Checkout/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <SkeletonTheme baseColor="#bbbbbb" highlightColor="#999">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/Category/:id' element={<Category />} />
            <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Cart/' element={<Cart />} />
            <Route exact path='/Checkout/' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </CartProvider>
  </React.StrictMode>,
)
