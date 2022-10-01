import React from 'react';
import { NavbarLink, LoginLink, SignupLink } from './NavStyles'

function Navbar() {
  return (
    <nav className='navbar'>
      <img 
        src='../icons/layers.png'
        alt='booking-system'
        className='navbar__img'
      />
      <h1 className='navbar__title'>Easy Booker</h1>
      <ul className='pages'>
        <li className='navbar__item1'>
          <NavbarLink to="/" >Home</NavbarLink>
        </li>
        <li className='nabar__item2'>
          <NavbarLink to="/about" >About</NavbarLink>
        </li>
        <li className='navbar__item3'>
          <NavbarLink to="/contact" >Contact</NavbarLink>
        </li>
      </ul>
      <ul className='account'>
        <li className='navbar__item4'>
          <LoginLink to="/login" >Login</LoginLink>
        </li>
        <li className='navbar__item5'>
          <SignupLink to="/signup" >Signup</SignupLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar