import React from 'react'
import CartWidjet from '../CartWidjet/CartWidjet'
import "./NavBar.css"
import {Link , NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='navBar'>
        <NavLink  className='nombreTienda'  to="/">
          <h1>RKT Indumentaria</h1>
        </NavLink>

        <NavLink className='btn_menu btn_menu2' to="/categorias/remera">Remeras</NavLink>
        <NavLink className='btn_menu btn_menu2' to="/categorias/camisa">Camisas</NavLink>
        <NavLink  className='btn_menu btn_menu2' to="/categorias/campera">Camperas</NavLink>
        <NavLink className='btn_menu btn_menu2' to="/categorias/pantalon">Pantalones</NavLink>
        <input type="text" name="" id="" className='btn_menu btn_menu-input' placeholder='buscar' />
        <NavLink to="/cart">
        <a href="#" className='btn_menu'><CartWidjet/></a>
        </NavLink>
        
            

    </div>
  )
}

export default NavBar