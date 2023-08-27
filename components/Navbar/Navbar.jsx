import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='nav-container'>
        <div className="nav-logo-container">
            <img src="src/public/metalmind-logo.png" alt=""/>
            <h1>metalmind</h1>
        </div>

        <div className='nav-menu-container'>
            <ul>
                <li><a className='underline' href="">Inicio</a></li>
                <li><a className='underline' href="">Sobre Nosotros</a></li>
                <li><a className='underline' href="">Productos</a></li>
                <li><a className='underline' href="">Nuestros Trabajos</a></li>
                <li><a className='underline' href="">Contacto</a></li>
            </ul>
        </div>
    </nav>    
    </>
  )
}

export default Navbar