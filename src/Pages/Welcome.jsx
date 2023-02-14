import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const Welcome = () => {

  return (
    <div className="App">
      <div className="d-flex justify-content-evenly vh-100" >            
        <div className="col-5 mt-3 d-flex  justify-content-end">
            <div className="d-flex align-items-center justify-content-end mx-2" id="imgBox" >
              <img src="static/me.png" className="img-fluid" alt="pic_of_me" style={{height:"auto", width:"70%"}}/>
            </div>
        </div>

        <div className="col-7 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-start mx-1" >
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
          <Link to={"/about"} ><img id="nav"src="static/about.png" alt="about" /></Link>
          <Link to={"/projects"} ><img id="nav"src="static/projects.png" alt="projects" /></Link>                  
          <Link to={"/contact"} ><img id="nav" src="static/contact.png" alt="contact" /></Link>                   
          <Link to={"/resume"} ><img id="nav"src="static/resume.png" alt="resume" /></Link>         
        </div>
      </div>
    </div>      
  </div>
  );
};

export default Welcome;
