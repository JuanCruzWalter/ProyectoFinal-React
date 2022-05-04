import React from 'react'
import CartWidjet from '../CartWidjet/CartWidjet'
import "./NavBar.css"
import {Link , NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='navBar'>
        <NavLink to="/">
          <h1>RKT Indumentaria</h1>
        </NavLink>

        <NavLink className='btn_menu btn_menu2' to="/categorias/remeras">Remeras</NavLink>
        <NavLink className='btn_menu btn_menu2' to="/categorias/camisas">Camisas</NavLink>
        <NavLink  className='btn_menu btn_menu2' to="/categorias/camperas">Camperas</NavLink>
        <NavLink className='btn_menu btn_menu2' to="/categorias/Ofertas">Ofertas</NavLink>
        
        <NavLink to="/cart">
        <input type="text" name="" id="" className='btn_menu btn_menu-input' placeholder='buscar' />
        <a href="#" className='btn_menu'><CartWidjet/></a>
        </NavLink>
        
            

    </div>
  )
}

export default NavBar