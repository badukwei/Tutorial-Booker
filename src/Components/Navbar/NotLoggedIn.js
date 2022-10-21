import React from "react";
import { LoginLink, SignupLink } from "../../Comfig/Styles/ButtonStyles";

function NotLoggedIn() {
  return (
  <ul className="account">
    <li>
      <LoginLink to="/login" >Login</LoginLink>
    </li>
    <li>
      <SignupLink to="/signup" >Signup</SignupLink>
    </li>
  </ul>
  )
}

export default NotLoggedIn