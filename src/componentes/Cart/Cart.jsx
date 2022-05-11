import { Link } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import "./Cart.css"
import { useEffect, useState } from "react"


function Cart() {
  
  const { cartList, removeCart } = useCartContext()
  const [listado, setListado] = useState()
  const [vacio, setVacio] = useState(false)
  const [comprobante, setComprobante] = useState(false)
  

  function confirmarCompra(e) {
      
    setComprobante(true)
    e.preventDefault();
  
    let orden={}
  
    orden.comprador = {nombre:"cliente1",email:"cliente1@gmail.com",telefono:"000-332-332"}
    orden.items = cartList.map(cartItem =>{
        
    const nombre = cartItem.name
    const cantidad = cartItem.count 
    setListado(orden)
    console.log(orden)
    return {nombre, cantidad}
       
    })
  
    const db = getFirestore()
    const queryCollection = collection(db, 'pedidos')
    addDoc(queryCollection, orden)
          
        
      
   
  }
  useEffect(()=>{
    
    
    if(cartList.length == 0){
      setVacio (false)
      
    }else{
      setVacio(true)
    }
    
  },[])
  
  
  return (
    
    <div className="cart_contenedor">
      {
        vacio ? (
        <div className="cart">      
              {cartList.map(prod => <li key={prod.id} style={{"margin-top" : "1rem"}}> agregaste el producto: {prod.name} -- cantidad: {prod.count} -- el precio por unidad es: $ {prod.precio} -- el subtotal es: $ {prod.count*prod.precio} </li>)}
              <button className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}} onClick={removeCart}>Vaciar Carrito</button>
              <Link to="/">
              <button className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}}>seguir comprando</button>
              </Link>
              <button onClick={confirmarCompra} className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}}>confirmar compra</button><br />
              
              
        </div>) 
     :
          (<div className="cart">
            <h4>El carrito esta vacio</h4><br />
            <Link to="/">
              <button className="btn btn-outline-warning" style={{"margin" : "1rem","padding" : ".3rem 1rem "}}>volver al inicio</button>
            </Link>
          </div>)
      }
      {
        comprobante ? 
          (<div className="cart">
          <h1> felicidades por tu compra!</h1>
          <li> nombre: {listado.comprador.nombre} email: {listado.comprador.email} telefono: {listado.comprador.telefono} </li>
          </div>) 
        :
          (<></>)
      }
    </div>


    
  )
}

export default Cart