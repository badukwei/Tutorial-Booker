import React, { useState } from "react";
import checkImg from "../../Assets/icons/checked.png";

//innerText in parent
function SubjectFilter(props) {

  const [isActive, setActive] = useState(false);
  const handleActive = () => {
    setActive(prev => !prev)
  }
  return (
    <div
      className={isActive ? "subject active" : "subject"}
      onClick={() => {
        handleActive();
        isActive ? props.removeMajor(props.sub.toLowerCase())
          : props.handleMajor(props.sub.toLowerCase())
      }}
    >
      <label>{props.sub}</label>
      {isActive ? (<img src={checkImg} alt="checkbox" />) : (<div></div>)}
    </div>
  )
}

export default SubjectFilter