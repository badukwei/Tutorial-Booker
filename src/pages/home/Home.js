import React from 'react';
import Body from './Body';
import Card from './Card';
import { ButtonLink } from './Bodystyles'
import teacherData from '../../data/teacher-data';

function Home() {
  const card = teacherData.data.teachers.map(item => {
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
      <div className='card-list-header'>
        <div className='texts'>
          <h1>Tutors</h1>
          <h4>Your best matched are all here!</h4>
        </div>
        <ButtonLink to="/login" className='button'>Start</ButtonLink>
      </div>
      <section className='card-list'>
        {card}
      </section>
    </div>
  )
}

export default Home