import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { authActions } from "../Services/authSlice";
import { infoActions } from "../Services/infoSlice";

function TutorForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.info.userInfo.tutee)
  const { register, handleSubmit } = useForm();
  console.log(userData)

  const onSubmit = (data) => {
    dispatch(authActions.tutorLogin());
    dispatch(infoActions.getTutorInfo(
      {
        ...userData,
        ...data
      }));
    navigate('/tutorial-booker')
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="message-container form tutorForm">
        <h1>Become the tutor</h1>
          <label>Your majors</label>
          <input
            {...register("major1")}
            className="major"
          />
          <input
            {...register("major2")}
            className="major"
          />
          <input
            {...register("major3")}
            className="major"
          />
          <label>Describe your skill level</label>
          <textarea
            {...register("desciption")}
            className="form-textarea"
          />
          <label className="rate">Rate ( per hour )</label>
          <input
            {...register("rate")}
            className="price"
          />
        <input
          type="submit"
          value="Submit"
          className="submit-button"
        />
      </form>
  )
}

export default TutorForm