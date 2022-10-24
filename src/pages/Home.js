import React from "react";
import { ButtonLink } from "../Comfig/Styles/ButtonStyles";
import Body from "../Layouts/Home/Body";
import Card from "../Components/Home/Card";
import memberData from "../Data/memberData";

function Home() {

  const card = memberData.data.tutors.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Body />
      <div className="card-list-header">
        <div className="texts">
          <h1>Tutors</h1>
          <h4>Your best matches are all here!</h4>
        </div>
        <ButtonLink to="/tutorial-booker/login" className="button">Start</ButtonLink>
      </div>
      <section className="card-list">
        {card}
      </section>
    </div>
  )
}

export default Home