import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import useFitText from "use-fit-text";


const Welcome = () => {

  const {fontSize, ref} = useFitText();

  return (
    <div className="App">
  
      <div className="d-flex justify-content-evenly vh-100">    
          
        <div className="col-4 mt-2">
            <div className="d-flex align-items-center justify-content-center vh-100">
              <img src="static/me.png" className="img-fluid"  alt="pic_of_me" style={{height:"80vh"}}/>
            </div>
        </div>

        {/* <div className="col-3 mt-4" style={{height:"40vh",border:"3px solid red"}}>        
            <div className="bubble bubble-bottom-left">
              <p className="text-wrap" ref={ref} style={{ fontSize, height: "100%", width: "auto" }} >
                Hi there! Welcome to my Portfolio! I'm Aleksandra/Sasha, Software Engineer with background in math. Here I'm sharing with you my true passion - Web Development! I hope you enjoy
                getting to know me...                  
              </p>             
            </div>         
        </div>       */}

           

        <div className="col-8 d-flex flex-column justify-content-evenly mt-2" style={{ fontSize:"7vh"}}>
          <div className="d-flex justify-content-start " style={{height:"30%", width:"50%"}}>
            <div className="bubble bubble-bottom-left">
                <p className="text-wrap" ref={ref} style={{ fontSize, height: "100%", width: "auto" }} >
                  Hi there! Welcome to my Portfolio! I'm Aleksandra/Sasha, Software Engineer with background in math. Here I'm sharing with you my true passion - Web Development! I hope you enjoy
                  getting to know me...                  
                </p>             
            </div> 
          </div>
            
        <div className="d-flex flex-column align-self-end mx-5 justify-content-evenly" style={{height:"60%", width:"45%"}}>
        {/* className="d-flex align-self-end justify-content-center mx-5" */}


          <Link to={"/about"}  style={{textDecoration:"none", color:"black",fontSize:"80%"}}><div class="border border-dark border-4 bg-light rounded-4">About </div></Link>
          
          <Link to={"/projects"} style={{textDecoration:"none", color:"black", fontSize:"80%"}}><div class="border border-dark border-4 bg-light rounded-4">Projects</div></Link>

          <Link to={"/contact"}  style={{textDecoration:"none", color:"black", fontSize:"80%"}}><div class="border border-dark border-4 bg-light rounded-4">Contact</div></Link>
          
          <Link to={"/resume"}  style={{textDecoration:"none", color:"black", fontSize:"80%"}}><div class="border border-dark border-4 bg-light rounded-4">Resume</div></Link>
        </div>
        </div>
      </div>      
    </div>
  );
};

export default Welcome;
