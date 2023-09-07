import React, { useState } from "react";
import data from "./data.json";
import './App.css';
import{MdNightlightRound}from 'react-icons/md'
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import talenq from './assets/talenqlogo.png'

import SectionContainer from "./Components/SectionsContainer/SectionContainer";
const App = () => {
  const [section, setSection] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const getSectionNumber = (e) => {
    const getSameValue = e.currentTarget.value;
    setSection(getSameValue);
    console.log(getSameValue);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); 
  };


  return (
    <div className={`dashboard-container ${darkTheme ? "dark-theme" : ""}`}>
        <div className="toggle-container">
          <div><img src={talenq} alt="" /></div>
        <h1 className="toggle-header">Dashboard</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {darkTheme ? <MdNightlightRound  className="toggle-icon"/> : <MdNightlightRound className="toggle-icon1"/>}
      </button>
        </div>
    
      <div>
        <Carousel data-bs-theme="dark">
          {data.banner.map((each) => {
            return (
              <Carousel.Item key={each.id_no}>
                {/* <img
                  className="d-block w-100  banner-img"
                  src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30697.jpg?t=st=1694020354~exp=1694020954~hmac=1b6f6c307526c80aa6142163626e20e05913459c9e3bceec59816ad924bb18ee"
                  alt="First slide"
                /> */}
                <div className={`banner-img ${darkTheme ? "dark-them" : ""}`}>

                </div>
                <Carousel.Caption className={`banner-img-container ${darkTheme ? "dark-theme" : ""}`}>
                  <h3 className={`banner-img-container ${darkTheme ? "dark-theme" : ""}`}>{each.id}</h3>
                  <p className={`banner-img-container ${darkTheme ? "dark-theme" : ""}`}>{each.text}</p>
                  {each.button === true ? (
                    <button className="section-btn">Click me!</button>
                  ) : (
                    " "
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div>
        <h1>Sections</h1>
        <div className="section-container">
          {data.section.map((each) => {
            return (
              <button
              className={`section-tab-item ${darkTheme ? "dark-theme" : ""}`}
            // className={`section-tab-item ${section===1? "section-tab-item1" : "section-tab-item "}`}
                onClick={getSectionNumber}
                value={each.sec_no}
                key={each.id}
              >
                {each.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="dashboard-cards-container">
        {/* {data.card.filter(((each)=>each.parent_sec_no == section).length<=3).map(each=>{

        })} */}
        {data.card
          .filter((each) => parseInt(each.parent_sec_no) === parseInt(section))
          .map((each) => {
            return (
              <>
                <SectionContainer details={each} key={each.id} darkTheme={darkTheme} />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default App;

