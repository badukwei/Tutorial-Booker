import React from "react";
import { ButtonLink } from "../../Comfig/Styles/ButtonStyles";
import homeImg from "../../Assets/images/home-page.jpg";
import bookMark from "../../Assets/icons/bookmark.png";
import edit from "../../Assets/icons/edit.png";
import ok from "../../Assets/icons/ok.png";
import Api from "twilio/lib/rest/Api";

function Body() {
  return (
    <section className="body">
      <div className="body__texts">
        <h1 className="body__title">Booking Tutorials more easily</h1>
        <p className="body__paragraph">
          Matching tutors and tutees
          <br />create by WeiChun Lin
        </p>
        <ButtonLink to="/tutorial-booker/signup">Check it now</ButtonLink>
        <img 
        src={edit}
        alt="icon"
        className="icon2"
        /> 
      </div>
      <div className="body__imgs">
        <img 
          src={homeImg}
          alt="tutorial"
          className="img-main"
        />
        <img 
          src={bookMark}
          alt="icon"
          className="icon1"
        /> 
        <img 
          src={ok}
          alt="icon"
          className="icon3"
        /> 
      </div>
    </section>
  )
}

export default Body


