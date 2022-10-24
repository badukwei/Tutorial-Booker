import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { authActions } from "../../Services/authSlice";
import { infoActions } from "../../Services/infoSlice";

import memberData from "../../Data/memberData";
import scheduleData from "../../Data/scheduleData";
import { scheduleActions } from "../../Services/scheduleSlice";

function LoginForm() {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const matchTuteeSchedule = (id) => {
    const tuteeSchedule = scheduleData.data.tutees;
    for(let i = 0; i < tuteeSchedule.length; i++) {
      if(id === tuteeSchedule[i].id) {
        return dispatch(scheduleActions.getTuteeSchedule(tuteeSchedule[i]))
      }
    }
    console.log("can't find the schedule")
  }

  const matchTutorSchedule = (id) => {
    const tutorSchedule = scheduleData.data.tutors;
    for(let i = 0; i < tutorSchedule.length; i++) {
      if(id === tutorSchedule[i].id) {
        return dispatch(scheduleActions.getTutorSchedule(tutorSchedule[i]))
      }
    }
    console.log("can't find the schedule")
  }

  const matchTutee = (name, password) => {
    console.log("matchTutee is called");
    const tuteeData = memberData.data.tutees
    for(let j = 0; j < tuteeData.length; j++) {
      if(name === tuteeData[j].name) {
        if(password === tuteeData[j].password){
          matchTuteeSchedule(tuteeData[j].id);
          dispatch(infoActions.getTuteeInfo(tuteeData[j]))
          return true
        }
      } 
    }
    return false
  };

  const matchTutor = (name, password) => {
    console.log("matchTutor is called");
    const tutorData = memberData.data.tutors;  
    for(let i = 0; i < tutorData.length; i++){
      if(name === tutorData[i].name) {
        if(password === tutorData[i].password){
          dispatch(infoActions.getTutorInfo(tutorData[i]));
          matchTutorSchedule(tutorData[i].id);
          matchTutee(tutorData[i].name, tutorData[i].password);
          return true
        }
      }
    }
    return false
  };
  
  const onSubmit = (data) => {
    if(matchTutor(data.name, data.password)) {
      dispatch(authActions.tutorLogin())
      return navigate('/tutorial-booker')
    } else if(matchTutee(data.name, data.password)) {
      dispatch(authActions.tuteeLogin())
      return  navigate('/tutorial-booker')
    } 
    return console.log("Check your account and password again...")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form flex-column-center">
      <label className="form-label">Account Name</label>
      <input
        {...register(
          "name",
          {
            required: true
          }
        )}
        className="form-input"
      />
      <label className="form-label">Password</label>
      <input
        {...register(
          "password",
          {
            required: true
          }
        )}
        className="form-input"
      />
      <input
        type="submit"
        value="Submit"
        className="submit-button"
      />
    </form>
  )
}

export default LoginForm