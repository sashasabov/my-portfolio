import React from "react";
import '../App.css'
import Project from "../components/Project";


const Projects = ({projects}) => {

  
  return (
    <div className="App" >
    <div className="container vh-100">
        <div className="d-flex justify-content-center mt-3" >
            <div className="hstack gap-5 align-items-center">
            {projects.map(project => <Project project={project} key={project.name}/>)}
            </div>
          </div>
    </div>
    </div>


  );
};

export default Projects;
