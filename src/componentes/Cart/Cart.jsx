import { Link } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import "./Cart.css"


function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div className="cart">
      
       {cartList.map(prod => <li key={prod.id} style={{"margin-top" : "1rem"}}> agregaste: {prod.name} - cantidad: {prod.count} - el subtotal es: {prod.count*prod.precio} </li>)}
      <button className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}} onClick={removeCart}>Vaciar Carrito</button>
      <Link to="/">
      <button className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}}>seguir comprando</button>
      </Link>
     
    </div>
  )
}

export default Cart