import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { authActions } from "../../Services/authSlice";
import { infoActions } from "../../Services/infoSlice";
import { scheduleActions } from "../../Services/scheduleSlice";
import { useNavigate } from "react-router-dom";


const clientId = "1062927250500-dvurj59qsal1f77f1jheq8gegpbgodtr.apps.googleusercontent.com"

function Logout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authActions.logout());
    dispatch(infoActions.cleanUserInfo());
    dispatch(scheduleActions.cleanUserSchedule());
    console.log("logged out");
    navigate('/tutorial-booker');
  }

  return (
    <div id="logOutButton">
      <GoogleLogout
        clientId={clientId}
        render={(renderProps) => (
          <button 
            onClick={renderProps.onClick=handleLogOut} 
            style={renderProps.style={ 
              padding: "0",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "100",
            }}
          > 
          Logout
          </button>
        )}
      />
    </div>
  )
}

export default Logout