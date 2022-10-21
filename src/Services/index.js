import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import infoSlice from "./infoSlice";
import scheduleSlice from "./scheduleSlice";
import bookingSlice from "./bookingSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    info: infoSlice.reducer,
    schedule: scheduleSlice.reducer,
    booking: bookingSlice.reducer 
  }
})

export default store