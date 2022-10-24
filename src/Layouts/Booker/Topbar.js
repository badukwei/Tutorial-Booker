import React from "react";
import search from "../../Assets/icons/search.png"

//Click the item and show the result
function Topbar(props) {

  return (
    <div className="flex-row-space-between">
      <div className={props.isActive ? "hamburger-button open hide-for-desktop" : "hamburger-button hide-for-desktop"} onClick={props.handleActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="search flex-row-center">
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          size="30"
          onChange={(event) => {
            props.handleName(event.target.value.toLowerCase());
          }}
          value={props.name}
        />
        <img
          src={search}
          alt="search"
          className="search-img"
        />
      </div>
    </div>
  )
}

export default Topbar

/* {props.name && (
  <div className="search__box">
    <span className="close" onClick={props.clearName}>x</span>
    <ul className="list">
      {memberData.data.tutors.filter(user => user.name.toLowerCase().includes(props.name))
        .map(user => (
          <li key={user.id} className="list-item">{user.name}</li>
        ))}
    </ul>
  </div>
)} */