import React from "react";
import { LoginLink, SignupLink } from "../../Comfig/Styles/ButtonStyles";

function NotLoggedIn() {
  return (
  <ul className="account">
    <li>
      <LoginLink to="/tutorial-booker/login" >Login</LoginLink>
    </li>
    <li>
      <SignupLink to="/tutorial-booker/signup" >Signup</SignupLink>
    </li>
  </ul>
  )
}

export default NotLoggedIn