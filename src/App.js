import { useState } from "react";
import NavBar from "./components/NavBar";
import { About } from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

const projects = [
  {
    name: "Sight-Word-Pro",
    url: "https://i.imgur.com/7FhAN7N.png",
    link:"https://sashasabov.github.io/Sight-Word-Pro/",
    description:
      "App designed as a game to help kindergarten age kids in learning sight-words, practice typing and using mouse",
    techDetails:
      "Built using HTML, CSS, Javascript. Used sessionStorage to pass data. Applied Javascript DOM manipulations",
  },
  {
    name: "WeGame",
    url: "https://i.imgur.com/etUHhVV.png",
    link:"https://wegame-project2.herokuapp.com/",
    description:
      "Library of games for any kind of events: outdoor, indoor, adults, kids parties. Users can sort games by category, leave a review/suggestion on the game, upload/delete their own game.",
    techDetails:
      "RESTful CRUD app with Express backend on Ejs templates featiruing Google auth, referenced and embedded schemas. Using MongoDB for database.",
  },
  {
    name: "Budget-Tallie",
    url: "https://i.imgur.com/w7Ri4ap.png",
    link:"http://budget-tallie-frontend.herokuapp.com/",
    description:
      "Budget tracker for everyday use, shows balance of all expenses. Allows users to customize expense category by adding new one or editing/deleting existing ones. Tracks all of the expenses on report with dates recorded",
    techDetails:
      "Used Express for backend and React for UI. Features token-based authentication. MongoDB for database.",
  },
];

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<About/> }/>
      </Routes>
    </div>
  );
}

export default App;
