import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"


function Item( {producto, id} ) {
  return (
    <div className='card' >
          <div>
            <img  className='card_img' src={producto.img} alt="" />
          </div>
          <div className='card_nombre'>{producto.name}</div>
          <div className='card_descripcion'>{producto.description}</div>
          <div className='card_descripcion'>$ {producto.precio}</div>
          <div>
            <Link to={`/detail/${id}`}>
              <button className='card_detalle'>
                  ver producto
              </button>
            </Link>
                                                                                                                                
                                                   
          </div>
                                          
    </div>
  )
}

export default Item