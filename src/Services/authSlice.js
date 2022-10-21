import { createSlice } from "@reduxjs/toolkit";


//is there a better way? payloads and actions
const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    isLoggedIn: false,
    isTutor: false,
    isTutee: false,
  },
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.isTutor = false;
      state.isTutee = false
    },
    tuteeLogin(state) {
      state.isLoggedIn = true;
      state.isTutor = false;
      state.isTutee = true 
    },
    tutorLogin(state) {
      state.isLoggedIn = true;
      state.isTutor = true;
      state.isTutee = false
    }
  }
})

export const authActions = authSlice.actions;

export default authSlice;