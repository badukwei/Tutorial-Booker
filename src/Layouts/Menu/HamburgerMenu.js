import React from "react";
import { useSelector } from "react-redux";
import { HamburgerMenuLoggIn, MenuLink } from "../../Comfig/Styles/ButtonStyles";

import Logout from "../../Components/Menu/Logout";

function HamburgerMenu() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isTutee = useSelector(state => state.auth.isTutee);
  const isTutor = useSelector(state => state.auth.isTutor);
  const userInfo = useSelector(state => state.info.userInfo);

  return (
    <div className="menu mobile-menu flex-column-center menu-container">
      {isLoggedIn ?
       <div className="account-menu flex-column-center">
        <h1>{userInfo.tutor.name ? userInfo.tutor.name : userInfo.tutee.name}</h1>
        {isTutor && (
          <div className="tutor-menu flex-column-center">
            <MenuLink to={`/tutorial-booker/${userInfo.tutor.id}/profile`}>Profile</MenuLink>
            <MenuLink to={`/tutorial-booker/${userInfo.tutor.id}/teaching-schedule`}>Teaching schedule</MenuLink>
            <MenuLink to={`/tutorial-booker/${userInfo.tutee.id}/learning-schedule`}>Learning schedule</MenuLink>
          </div>
        )}
        {isTutee && (
          <div className="tutee-menu flex-column-center">
            <MenuLink to={`/tutorial-booker/${userInfo.tutor.id}/profile`}>Profile</MenuLink>
            <MenuLink to={`/tutorial-booker/${userInfo.tutee.id}/learning-schedule`}>Learning schedule</MenuLink>
            <MenuLink to="/tutorial-booker/tutor-form">Become a tutor</MenuLink>
          </div>
        )}
        </div>
        :
        <div className="login-button flex-row-center">
          <HamburgerMenuLoggIn to="/tutorial-booker/login">Login</HamburgerMenuLoggIn>
          <HamburgerMenuLoggIn to="/tutorial-booker/signup">Signup</HamburgerMenuLoggIn>
        </div>
      }
      <div className="hamburger-pages flex-column-center">
        <MenuLink to="/tutorial-booker" >Home</MenuLink>
        <MenuLink to="/tutorial-booker/about" >About</MenuLink>
        <MenuLink to="/tutorial-booker/contact" >Contact</MenuLink>
        <MenuLink to="/tutorial-booker/book-tutor" >Tutors</MenuLink>
      </div>
      {isLoggedIn && <Logout />}
    </div>
  )
}

export default HamburgerMenu