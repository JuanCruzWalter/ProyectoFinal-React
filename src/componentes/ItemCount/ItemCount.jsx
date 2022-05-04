import React, { useContext } from 'react';
import './ItemCount.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';



export default function ItemCount({precio,name,id}) {
    
  const stock = 10;
  const [count, setCount] = useState(1);
  const {addToCart} = useContext(CartContext)

  const sumarCount = () => {
    setCount(count + 1);
  };
  const restarCount = () => {
    setCount(count - 1);
  };
  const alertAgregar = (e) => {
    
   addToCart({precio,name,count})
  };


  

  return (
    <>
        <div className="contenedor-count">
            <div className="contenedor-btn">
                <button onClick={restarCount} disabled={count <= 1} className="btn-count">
                -
                </button>

                <label className="count"> {count} </label>

                <button onClick={sumarCount} disabled={count == stock} className="btn-count">
                +
                </button>
            </div>

            <div>
              <Link to={"/cart"}>
                <button onClick={alertAgregar} className="agregar">agregar</button>
              </Link>
               
            </div>
        </div>
    </>
  );
}