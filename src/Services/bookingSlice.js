import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name:"booking",
  initialState: {},
  reducers: {
    setBookerSchedule(state, payload) {
      state = {
        ...payload
      }
    },
    cleanBookerSchedule(state) {
      state = {}
    },
  }
})

export const bookingActions = bookingSlice.actions;

export default bookingSlice;