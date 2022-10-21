import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name:"info",
  initialState: {
    userInfo: {
      tutor: {},
      tutee: {}
    },
  },
  reducers: {
    getTutorInfo(state, action) {
      state.userInfo.tutor = {
        ...action.payload
      }
    },
    getTuteeInfo(state, action) {
      state.userInfo.tutee = {
        ...action.payload
      }
    },
    cleanUserInfo(state) {
      state.userInfo = {
        tutor: {},
        tutee: {}
      }
    },

  }
})

export const infoActions = infoSlice.actions;

export default infoSlice;