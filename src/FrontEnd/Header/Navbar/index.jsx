import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Navbar = ({countCartItems}) => {
  return (

    <div>
      <div className="grad-bar"></div>
      <nav className="navbar">
        <NavLink className="logo" to='/'> DalalTechnologies</NavLink>
        <div className="menu-toggle" id="mobile-menu"></div>
        <div className='nav'>
          <NavLink className='nav1' to="/">Home</NavLink>
          <NavLink className='nav1' to="/Assignments">Assignment</NavLink>
          <NavLink className='nav1' to="/Project">Project</NavLink>
          <NavLink className='nav1' to="/Contact">Contact Us</NavLink>
          <NavLink className='cart-icon' to="/Cart"><img src='./Images/cart.png' alt='cart' /> <p>{countCartItems?countCartItems:""}</p></NavLink>
          <div className='searchbar'>
            <input type="text" className="sacrh" />
            <button className="sarchbt">Search</button>
            <button className="sarchbt">Login</button>
          </div>

        </div>

      </nav>


    </div>

  )
}

export default Navbar