import React, { useState } from "react";
// import memberData from "../../../data/memberData";
import SubjectFilter from "../../Components/Booker/SubjectFilter";

function Sidebar(props) {

  const subjects = ['Baduk', 'Miscellaneous', 'Energy', 'Health Care', 'Consumer Services', 'Technology', 'Finance', 'Public Utilities', 'Consumer Durables', 'Capital Goods', 'Basic Industries'];
  
  const subjectFilter = (arr) => arr.map(sub => {
    return (
      <SubjectFilter
        key={sub}
        sub={sub}
        handleMajor={props.handleMajor}
        removeMajor={props.removeMajor}
      />
    )
  })

  return (
    <div className="sidebar flex-column">
      <h2 className="price-title">Price</h2>
      <div className="price">
        <input
          placeholder="min"
          type="number"
          min="0"
          max="100"
          className="price__input"
          onChange={event => props.handleMinPrice(event.target.value)}
        />
        <label>to</label>
        <input
          placeholder="max"
          type="number"
          min="0"
          max="100"
          className="price__input"
          onChange={event => props.handleMaxPrice(event.target.value)}
        />
      </div>
      <h2 className="subject-title">Subject</h2>
      <div className="subject-container">
        {subjectFilter(subjects)}
      </div>
    </div>
  )
}

export default Sidebar

//how to map all items
//why it can't be shown??????????????????????????
// const mapSubject = (data) => {
//   const majorArray = []
//   data.map(item => {
//     if (item.major1 && !majorArray.includes(item.major1)) {
//       majorArray.push(item.major1);
//     }
//     return majorArray
//   })
//   console.log(majorArray)
// };
// const subjectData = memberData.data.tutors;