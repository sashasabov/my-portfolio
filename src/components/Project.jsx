import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({project}) => {
  return (
    <div className="card border border-dark border-4 rounded-4" style={{ width: "18rem", backgroundColor: "FFFCF2" }} >
    <img
      src= {project.url}
      className="card-img-top"
      alt={project.name}
    />
    <div className="card-body " data-bs-toggle="collapse" data-bs-target= {'#'+project.name} aria-expanded="false" aria-controls={project.name}>
      <p className="card-text fs-2">{project.name}</p>
    </div>

    <div class="collapse" id={project.name}>
  <div class="card card-body">
  <h5>Description:</h5><p> {project.description}</p>
  <h5>TechDetails:</h5><p>{project.techDetails}</p>
  <h5>Link:</h5><a href={project.link}>{project.name}</a>
  </div>
</div>

  </div>
  )
}

export default Project