import React from "react";
import { PriceTag } from "../../Comfig/Styles/ButtonStyles";
import myImg from "../../Assets/images/tutor.png";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.id === 1 ? myImg : props.img}
        alt="tutor"
        className="card__img"
      />
      <h2 className="name">{props.name}</h2>
      <ul className="card__header">
        {props.major1 &&
          <li>{props.major1}</li>}
        {props.major2 &&
          <li>{props.major2}</li>}
        {props.major3 &&
          <li>{props.major3}</li>}
      </ul>
      <div className="card__content">
        <h2>About</h2>
        <p>{props.description}</p>
      </div>
      <PriceTag to={`/tutorial-booker/book-tutor/${props.id}`}>{`${props.rate} / 1 hour`}</PriceTag>
    </div>
  )
}

export default Card