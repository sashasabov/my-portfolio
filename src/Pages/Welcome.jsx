import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import useFitText from "use-fit-text";


const Welcome = () => {

  const {fontSize, ref} = useFitText();

  return (
    <div className="App">
  
      <div className="d-flex justify-content-evenly vh-100">    
          
        <div className="col-5 mt-2">
            <div className="d-flex align-items-center justify-content-center vh-100">
              <img src="static/me.png" className="img-fluid"  alt="pic_of_me" style={{height:"80vh"}}/>
            </div>
        </div>

        <div className="col-7 d-flex flex-column justify-content-evenly mt-2" style={{ fontSize:"7vh"}}>
          <div className="d-flex justify-content-start " style={{height:"30%", width:"50%"}}>
            <div className="bubble bubble-bottom-left">
                <p className="text-wrap" ref={ref} style={{ fontSize, height: "100%", width: "auto" }} >
                  Hi there! Welcome to my Portfolio! I'm Aleksandra/Sasha, Software Engineer with background in math. Here I'm sharing with you my true passion - Web Development! I hope you enjoy
                  getting to know me...                  
                </p>             
            </div> 
          </div>
            
        <div className="d-flex flex-wrap justify-content-around mx-5 align-self-center" style={{fontFamily:"Vtks Have a Nice Day", fontSize:"6vw", width:"70%"}}>
          <Link to={"/about"} className="direct">About</Link>
          <Link to={"/projects"} className="direct">Projects</Link>                  
          <Link to={"/contact"} className="direct">Contact</Link>                   
          <Link to={"/resume"} className="direct">Resume</Link>         
        </div>
        </div>
      </div>      
    </div>
  );
};

export default Welcome;
