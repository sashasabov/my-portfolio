import React from "react";
import Pictures from "../components/Pictures";
import "../App.css";
import useFitText from "use-fit-text";

export const About = () => {

  const {fontSize, ref} = useFitText();

  return (
    <div  className="App">
    <div className="d-flex p-1" >
      <div className="row vh-100"> 
        
        <div className="col-3 mt-5">
          <Pictures />
        </div>

        <div className="col-9 mt-5">
          <div className="d-flex justify-content-evenly flex-wrap" style={{height:"70%"}} >
            <div  style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px",width: "25vw", height: "30vh", rotate:"-10deg"}}>
              <h5 style={{marginTop:"2%"}}>A little about me...</h5>
              <p ref={ref} style={{ fontSize, height: "35%", width: "auto", margin:"2% 2% 2% 2%"}}>
                I'm Aleksandra, but everyone calls me Sasha. My journey began many years ago when I studied mathematics at Baltic Federal University of Kaliningrad, Russia. After moving to the USA with $500 in my pocket, I had to start everything from scratch: learning language, and finding a job to pay bills, and complete education. Within few years I got my Associate Degree and later Bachelor with major in mathematics.
              </p>
            </div>
            
            <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px",width: "25vw", height: "30vh",rotate:"10deg" }}>
            <h5 style={{marginTop:"2%"}}>My career path...</h5>
              <p ref={ref} style={{ fontSize, height: "35%", width: "auto", margin:"2% 2% 2% 2%" }}>
              Meanwhile, I continued working at a health care company as a Payroll Specialist for 9 years. This experience has shaped my strong abilities in communication, logic skills and multitasking. Being a frequent go-to person for compiling business-related reports and software manuals influenced my interest towards exploring any new software that our company would've implemented, especially its functionality.
              </p>
            </div>
            <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", width: "25vw", height: "30vh", rotate:"5deg" }}>
            <h5 style={{marginTop:"2%"}}>Getting into tech...</h5>
              <p ref={ref} style={{ fontSize, height: "35%", width: "auto", margin:"2% 2% 2% 2%"}}>
              Becoming a Software Engineer allowed me to tackle new obstacles and create cutting-edge solutions in a tech-powered world - from debugging system errors with Javascript to creating algorithms using React to infer information. As technology rapidly penetrates every aspect of our lives, I am excited to leverage my analytical nature and inquisitive mindset to create low-cost solutions and technological resources that are accessible and improve the lives of all communities.
              </p>
            </div>
            <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", width: "25vw", height: "30vh", rotate:"-10deg"}}>
            <h5 style={{marginTop:"2%"}}>Off coding...</h5>
              <p ref={ref} style={{ fontSize, height: "35%", width: "auto", margin:"2% 2% 2% 2%" }}>
              Outside of my computer desk you can find me "pseudocoding" my kids daily routines, learning new tricks in photography - another passion of mine, web surfing for anything related to interior design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};
