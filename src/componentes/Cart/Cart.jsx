import { useCartContext } from "../../CartContext/CartContext"
import "./Cart.css"


function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div className="cart">
      
       {cartList.map(prod => <li key={prod.id} > nombre: {prod.name} - cantidad: {prod.count} </li>)}
      <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart