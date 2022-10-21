import React, { useState } from "react";

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
      {isActive ? (<img src="../images/checked.png" alt="checkbox" />) : (<div></div>)}
    </div>
  )
}

export default SubjectFilter