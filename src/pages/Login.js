import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { authActions } from "../Services/authSlice";
import { infoActions } from "../Services/infoSlice";

import LoginForm from "../Components/Forms/LoginForm";



const clientId = "1062927250500-dvurj59qsal1f77f1jheq8gegpbgodtr.apps.googleusercontent.com"

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Google login
  const onSuccess = (res) => {
    const googleInfo = res.profileObj;
    dispatch(infoActions.getTuteeInfo({
      name: googleInfo.name, 
      email: googleInfo.email
    }))
    dispatch(authActions.tuteeLogin());
    navigate('/tutorial-booker');
  };
  const onFailure = (err) => {
    console.error(err)
  };

  return (
    <div className="message-container flex-column-center login">
      <h1>Welcome to Easy Booker</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with your google account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
      <p className="login-text">Or login with your account!</p>
      <LoginForm></LoginForm>
      <p>Don't have one? <Link to="tutorial-booker/signup">Signup here</Link></p>
    </div>
  )
}

export default Login