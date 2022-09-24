import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (  
    <ul className="nav justify-content-end display-2">
  <li className="nav-item">
    {/* <Link to="/projects">About</Link> */}
    <Link to="/about" className="nav-link active text-dark "> About</Link>
    {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
  </li>
  <li className="nav-item">
  <Link to="/projects" className="nav-link active text-dark">Projects</Link>
    {/* <a className="nav-link" href="#">Link</a> */}
  </li>
  <li className="nav-item">
  <Link to="/contact"className="nav-link active text-dark ">Contact</Link>   
  </li>

</ul>
  )
}

export default NavBar