import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { authActions } from "../../Services/authSlice";
import { infoActions } from "../../Services/infoSlice";
import { scheduleActions } from "../../Services/scheduleSlice";

import memberData from "../../Data/memberData";

function SignUpForm() {

  const tuteeInfo = memberData.data.tutees;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    for (let i = 0; i < tuteeInfo.length; i++) {
      if (data.name !== tuteeInfo[i].length) {
        dispatch(authActions.tuteeLogin());
        dispatch(infoActions.getTuteeInfo({ id: tuteeInfo.length + 1, ...data }))
        //post data if we have backend and batabase
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="LoginForm" className="form flex-column-center">
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
      <label className="form-label">Email</label>
      <input
        {...register(
          "email",
          {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          }
        )}
        className="form-input email"
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

export default SignUpForm