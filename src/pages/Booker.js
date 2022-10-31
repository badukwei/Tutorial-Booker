import React, { useState } from "react";

import Card from "../Components/Home/Card";
import Topbar from "../Layouts/Booker/Topbar";
import Sidebar from "../Layouts/Booker/Sidebar";

import memberData from "../Data/memberData";

//three major && not only name search
function Booker() {

  const [name, setName] = useState("");
  const [major, setMajor] = useState([]);
  const [minPrice, setMinPrice] = useState(NaN);
  const [maxPrice, setMaxPrice] = useState(NaN);
  const [isActive, setActive] = useState(false);
  const tutorData = memberData.data.tutors;
  
  const handleActive = () => {
    setActive(prev => !prev)
  }

  const handleName = (name) => {
    setName(name);
  };

  const clearName = () => {
    setName("")
  }

  const handleMajor = (data) => {
    setMajor(oldArray => [...oldArray, data]);
  };

  const removeMajor = (data) => {
    setMajor(major.filter(item => item !== data))
  };

  const handleMinPrice = (min) => {
    setMinPrice(min)
  };

  const handleMaxPrice = (max) => {
    setMaxPrice(max)
  };

  const tutorCard = (data) => data.map(user => {
    return (
      <Card
        key={user.id}
        {...user}
      />
    )
  });

  const searchName = (data) => data.filter(item => item.name.toLowerCase().includes(name))
  const searchMajor = (data) => data.filter(key => key.major1).filter(item => major.includes(item.major1.toLowerCase()))
  const searchPrice = (data) => data.filter(item => maxPrice > item.rate && item.rate > minPrice)

  const filterResult = (data) => {
    if (name && major.length > 0 && (minPrice && maxPrice)) {
      return searchName(searchMajor(searchPrice(data)))
    } else if (name && !(major.length > 0) && (minPrice && maxPrice)) {
      return searchName(searchPrice(data))
    } else if (!name && major.length > 0 && (minPrice && maxPrice)) {
      return searchMajor(searchPrice(data))
    } else if (!name && !(major.length > 0) && (minPrice && maxPrice)) {
      return searchPrice(data)
    } else if (name && major.length > 0 && !(minPrice && maxPrice)) {
      return searchName(searchMajor(data))
    } else if (name && !(major.length > 0) && !(minPrice && maxPrice)) {
      return searchName(data)
    } else if (!name && major.length > 0 && !(minPrice && maxPrice)) {
      return searchMajor(data)
    } else {
      return data
    }
  }

  return (
    <div className="booker">
      <Topbar
        handleName={handleName}
        name={name}
        clearName={clearName}
        handleActive={handleActive}
        isActive={isActive}
      />
      <main className="booker-main">
        <section className={isActive ? "" : "hide-for-mobile"}>
          <Sidebar
            handleMajor={handleMajor}
            removeMajor={removeMajor}
            handleMinPrice={handleMinPrice}
            handleMaxPrice={handleMaxPrice}
          />
        </section>
        <section className="tutor-list">
          {tutorCard(filterResult(tutorData))}
        </section>
      </main>
    </div>
  )
}

export default Booker
