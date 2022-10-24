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
        <Route path="tutorial-booker" exact element={<Home />} />
        <Route path="tutorial-booker/about" exact element={<About />} />
        <Route path="tutorial-booker/contact" exact element={<Contact />} />
        <Route path="tutorial-booker/book-tutor" exact element={<Booker />} />
        <Route path="tutorial-booker/book-tutor/:tutorId" exact element={< TutorProfolio />} />
        <Route path="tutorial-booker/login" exact element={<Login />} />
        <Route path="tutorial-booker/signup" exact element={<Signup />} />
        <Route path="tutorial-booker/signup/tutor-form" exact element={<TutorForm />} />
        <Route path="tutorial-booker/:tutorId/teaching-schedule" exact element={< TeachingSchedule />} />
        <Route path="tutorial-booker/:tuteeId/learning-schedule" exact element={< LearningSchedule />} />
        <Route path="tutorial-booker/:id/profile" exact element={< Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
