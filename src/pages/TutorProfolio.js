import React from "react";
import { useParams } from "react-router-dom";

import BookSchedule from "../Components/Booker/BookSchedule";

import scheduleData from "../Data/scheduleData";
import memberData from "../Data/memberData"

function TutorProfolio() {

  const tutorId = useParams();
  const tutorInfo = memberData.data.tutors;
  const allSchedule = scheduleData.data.tutors;

  const matchInfo = (data) => data.filter(tutor => tutor.id === parseInt(tutorId.tutorId))
  const matchSchedule = (data) => data.filter(schedule => schedule.id === parseInt(tutorId.tutorId))
    .map(item => {
      return (
        <BookSchedule
          key={item.id}
          schedule={item.schedule}
        />
      )
    })
  console.log(matchSchedule(allSchedule))

  return (
    <div className="tutor-info">
      {matchInfo(tutorInfo).map(item => {
        return (
          <div className="tutor" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              className="tutor__img"
            />
            <div className="container">
              <h2 className="name">{item.name}</h2>
              <ul className="major-container">
                {item.major1 &&
                  <li className="major">{item.major1}</li>}
                {item.major2 &&
                  <li className="major">{item.major2}</li>}
                {item.major3 &&
                  <li className="major">{item.major3}</li>}
              </ul>
              <div className="price">
                $ <span>{item.rate} </span>
                / <span>1 hour</span>
              </div>
            </div>
          </div>
        )
      })}
      {matchSchedule(allSchedule)}
    </div>
  )
}

export default TutorProfolio