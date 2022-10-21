import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavbarLink } from "../../Comfig/Styles/ButtonStyles"
import NotLoggedIn from "../../Components/Navbar/NotLoggedIn";
import AccountInfo from "../../Components/Navbar/AccountInfo";
import HamburgerMenu from "../../Layouts/Menu/HamburgerMenu";

function Navbar() {

  const [isActive, setActive] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const handleActive = () => {
    setActive(prev => !prev)
  }

  return (
    <nav className="navbar">
      <img
        src="../icons/layers.png"
        alt="booking-system"
        className="navbar__img"
      />
      <h1 className="navbar__title">Easy Booker</h1>
      <ul className="pages">
        <li className="navbar__item1">
          <NavbarLink to="/" >Home</NavbarLink>
        </li>
        <li className="nabar__item2">
          <NavbarLink to="/about" >About</NavbarLink>
        </li>
        <li className="navbar__item3">
          <NavbarLink to="/contact" >Contact</NavbarLink>
        </li>
        <li className="navbar__item3">
          <NavbarLink to="/book-tutor" >Tutors</NavbarLink>
        </li>
      </ul>
      { isLoggedIn ? <AccountInfo /> : <NotLoggedIn /> }
      <div className="hamburger-button" onClick={handleActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isActive && <HamburgerMenu />}
    </nav>
  )
}

export default Navbar