import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name:"schedule",
  initialState: {
    userSchedule: {
      tutor: {},
      tutee: {}
    },
  },
  reducers: {
    getTutorSchedule(state, action) {
      state.userSchedule.tutor = {
        ...action.payload
      }
    },
    getTuteeSchedule(state, action) {
      state.userSchedule.tutee = {
        ...action.payload
      }
    },
    addTutorSchedule(state, action) {
      state.userSchedule.tutor = {
        ...state.userSchedule,
        ...action.payload
      }
    },
    addTuteeSchedule(state, action) {
      state.userSchedule.tutee = {
        ...state.userSchedule,
        ...action.payload
      }
    },
    cleanUserSchedule(state) {
      state.userSchedule =  {
        tutor: {},
        tutee: {}
      }
    },
  }
})

export const scheduleActions = scheduleSlice.actions;

export default scheduleSlice;
