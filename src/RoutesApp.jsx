import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CartContextProvider from './CartContext/CartContext'
import Cart from './componentes/Cart/Cart'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'

function RoutesApp() {
  return (
    <div>
        <BrowserRouter>
        <CartContextProvider>
        <NavBar/>
            <Routes>
                <Route path="/"
                element={<ItemListContainer saludo="Bienvenido a la tienda RKT"/>}
                />
                <Route path="/count"
                element={<ItemCount/>}
                />
                <Route path="/detail/:detailId"
                element={<ItemDetailContainer/>}
                />
                <Route path="/cart"
                element={<Cart/>}
                />
            </Routes>

        </CartContextProvider>
        
        </BrowserRouter>
        
        
    </div>
  )
}

export default RoutesApp