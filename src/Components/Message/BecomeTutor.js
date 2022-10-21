import React from "react";
import { useSelector } from "react-redux";
import { TutorSignupLink } from "../../Comfig/Styles/ButtonStyles";

function Identity() {

  const userInfo = useSelector(state => state.info.userInfo);
  console.log(userInfo);

  return (
    <div className="message-container flex-column-center become-tutor">
      <h1>Now, you can book lessons as a tutee!</h1>
      <p>interested in more?</p>
      <TutorSignupLink to={`tutor-form`}>Become a tutor</TutorSignupLink>
    </div>
  )
}

export default Identity