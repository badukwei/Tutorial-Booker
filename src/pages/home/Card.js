import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={`../images/${props.img}`}
        alt='teacher'
        className='card__img'
      />
      <h2 className='name'>{props.name}</h2>
      <ul className='card__header'>
        {props.major.first.length !== 0 &&
          <li>{props.major.first}</li>}
        {props.major.second.length !== 0 &&
          <li>{props.major.second}</li>}
        {props.major.third.length !== 0 &&
          <li>{props.major.third}</li>}
      </ul>
      <div className='card__content'>
        <h2>About</h2>
        <p>{props.description}</p>
      </div>
      <div className='card__price'>
        $ <span>{props.rate.price} </span>
        / <span>{props.rate.hour} hour</span>
      </div>
    </div>
  )
}

export default Card