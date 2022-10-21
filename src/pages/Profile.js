import React from "react";
import { useSelector } from "react-redux";

function Profile() {

  const userData = useSelector(state => state.info.userInfo);
  const identity = useSelector(state => state.auth.isTutee);

  return (
    <div className="container profile">
      {identity ?
        <div className="info">
          <h2 className="name">{userData.tutee.name}</h2>
          <h3>Email</h3>
          <p className="email">{userData.tutee.email}</p>
        </div>
        :
        <div>
          <div className="info flex-column">
            <img
              src={userData.tutor.img}
              alt={userData.tutor.name}
              className="img"
            />
            <h2 className="name">{userData.tutor.name}</h2>
            <h3>Email</h3>
            <p className="email">{userData.tutor.email}</p>
          </div>
          <div className="major-info">
            <h3>Majors</h3>
            <ul className="major-list">
              {userData.tutor.major1 &&
                <li className="major">{userData.tutor.major1}</li>}
              {userData.tutor.major3 &&
                <li className="major">{userData.tutor.major2}</li>}
              {userData.tutor.major3 &&
                <li className="major">{userData.tutor.major3}</li>}
            </ul>
          </div>
          <div className="description-info">
            <h3>Description</h3>
            <p className="description">{userData.tutor.description}</p>
          </div>
          <div className="rate-info">
            <h3>rate</h3>
            <p className="rate">$ {userData.tutor.rate} / 1 hour</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Profile