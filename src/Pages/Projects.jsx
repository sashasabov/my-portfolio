import React from "react";
import '../App.css'
import Project from "../components/Project";


const Projects = ({projects}) => {

  
  return (

    <div className="App" style={{height:"100vh"}}>
    <div className="App" style={{border:"0"}}>
    {/* <div className="container vh-100">
        <div className="d-flex justify-content-center mt-3" >
            <div className="hstack gap-5 align-items-center">
            {projects.map(project => <Project project={project} key={project.name}/>)}
            </div>
          </div>
    </div> */}
      <div className=" d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 d-flex justify-content-evenly">
          {projects.map(project => <Project project={project} key={project.name}/>)}
        </div>
      </div>
    </div>
    </div>

);
};

export default Projects;
