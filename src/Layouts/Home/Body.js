import React from "react";
import { ButtonLink } from "../../Comfig/Styles/ButtonStyles"

function Body() {
  return (
    <section className="body">
      <div className="body__texts">
        <h1 className="body__title">Booking Tutorials more eazily</h1>
        <p className="body__paragraph">
          Matching tutors and tutees
          <br />create by WeiChun Lin
        </p>
        <ButtonLink to="signup">Check it now</ButtonLink>
        <img 
        src="../icons/edit.png"
        alt="icon"
        className="icon2"
        /> 
      </div>
      <div className="body__imgs">
        <img 
          src="../images/home-page.jpg"
          alt="tutorial"
          className="img-main"
        />
        <img 
          src="../icons/bookmark.png"
          alt="icon"
          className="icon1"
        /> 
        <img 
          src="../icons/ok.png"
          alt="icon"
          className="icon3"
        /> 
      </div>
    </section>
  )
}

export default Body