import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { gapi } from "gapi-script";

import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Booker from "./Pages/Booker";
import TutorProfolio from "./Pages/TutorProfolio";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import NoPage from "./Pages/Nopage";

import TutorForm from "./Pages/TutorForm";

import TeachingSchedule from "./Pages/schedule/TeachingSchedule";
import LearningSchedule from "./Pages/schedule/LearningSchedule";

const clientId = "1062927250500-dvurj59qsal1f77f1jheq8gegpbgodtr.apps.googleusercontent.com"


//react-route auth
//menu style
function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const checkTutee = useSelector(state => state.auth.isTutee);
  const checkTutor = useSelector(state => state.auth.isTutor);
  const userInfo = useSelector(state => state.info.userInfo);
  const userSchedule = useSelector(state => state.schedule.userSchedule)

  useEffect(() => {
    gapi.load('client:auth2', start)

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
  });

  console.log(isLoggedIn, checkTutee, checkTutor);
  console.log(userInfo);
  console.log(userSchedule);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-tutor" element={<Booker />} />
        <Route path="book-tutor/:tutorId" element={< TutorProfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/tutor-form" element={<TutorForm />} />
        <Route path=":tutorId/teaching-schedule" element={< TeachingSchedule />} />
        <Route path=":tuteeId/learning-schedule" element={< LearningSchedule />} />
        <Route path=":id/profile" element={< Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
