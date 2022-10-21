import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";

import { authActions } from "../Services/authSlice";
import { infoActions } from "../Services/infoSlice";
import BecomeTutor from "../Components/Message/BecomeTutor";
import SignUpForm from "../Components/Forms/SignUpForm";


//Global remember profile state
const clientId = "1062927250500-dvurj59qsal1f77f1jheq8gegpbgodtr.apps.googleusercontent.com"

function Signup() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const googleInfo = res.profileObj;
    dispatch(infoActions.getTuteeInfo({
      name: googleInfo.name, 
      email: googleInfo.email
    }))
    dispatch(authActions.tuteeLogin());
  };
  const onFailure = (err) => {
    console.error(err)
  };

  return (
    <div id="logInButton" >
      {isLoggedIn ? (
      <BecomeTutor />
      ):(
      <div className="message-container flex-column-center">
        <h1 className="message-header">Welcome to Easy Booker</h1>
        <GoogleLogin
          clientId={clientId}
          buttonText="Signup with your google account"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
        <SignUpForm />
      </div>
      )}
    </div>
  )
}

export default Signup