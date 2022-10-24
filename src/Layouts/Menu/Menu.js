import React from "react";
import { useSelector } from "react-redux";
import { MenuLink } from "../../Comfig/Styles/ButtonStyles"
import Logout from "../../Components/Menu/Logout";

//teacher and student state
//menu style
function Menu() {

  const isTutee = useSelector(state => state.auth.isTutee);
  const isTutor = useSelector(state => state.auth.isTutor);
  const userInfo = useSelector(state => state.info.userInfo);

  return (
    <div className="menu flex-column-center menu-container desktop-menu-position">
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
          <MenuLink to="/tutorial-booker/signup/tutor-form">Become a tutor</MenuLink>
        </div>
      )}
      <MenuLink to="/tutorial-booker/contact">Contact us</MenuLink>
      <Logout />
    </div>
  )
}

export default Menu