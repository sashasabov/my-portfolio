import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const Welcome = () => {

  return (
    <div className="App">
      <div className="d-flex justify-content-evenly vh-100">            
        <div className="col-6 mt-3">
            <div className="d-flex align-items-center justify-content-end vh-100 mx-5">
              <img src="static/me.png" className="img-fluid"  alt="pic_of_me" style={{height:"80vh"}}/>
            </div>
        </div>

        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-start" >
            <div className="bubble bubble-bottom-left">
              <TypeAnimation                           
                sequence={[
                  `Hi there! Welcome to my Portfolio! I'm Aleksandra/Sasha, Software Engineer with background in math. Here I'm sharing with you my true passion - Web Development! I hope you enjoy getting to know me...`
                ]}
                cursor={false}
                repeat={1}  
                style={{ fontSize:"2.2vh"}}                                 
                  />
              </div>
            </div> 
 
        <div className="d-flex flex-column justify-content-evenly align-items-center mb-5" >
          <Link to={"/about"} ><img id="nav"src="static/about.png" alt="contact" /></Link>
          <Link to={"/projects"} ><img id="nav"src="static/projects.png" alt="contact" /></Link>                  
          <Link to={"/contact"} ><img id="nav" src="static/contact.png" alt="contact" /></Link>                   
          <Link to={"/resume"} ><img id="nav"src="static/resume.png" alt="contact" /></Link>         
        </div>
      </div>
    </div>      
  </div>
  );
};

export default Welcome;
