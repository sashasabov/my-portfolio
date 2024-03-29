
import { About } from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import WithNavBar from "./components/WithNavBar";
import { NoNavBar } from "./components/NoNavBar";
import Welcome from "./Pages/Welcome";
import "./App.css"

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
    link:"https://we-game-library.onrender.com/",
    description:
      "Library of games for any kind of events: outdoor, indoor, adults, kids parties. Users can sort games by category, leave a review/suggestion on the game, upload/delete their own game.",
    techDetails:
      "RESTful CRUD app with Express backend on Ejs templates featiruing Google auth, referenced and embedded schemas. Using MongoDB for database.",
  },
  {
    name: "Budget-Tallie",
    url: "https://i.imgur.com/w7Ri4ap.png",
    link:"https://budget-tallie-ui.vercel.app/",
    description:
      "Budget tracker for everyday use, shows balance of all expenses. Allows users to customize expense category by adding new one or editing/deleting existing ones. Tracks all of the expenses on report with dates recorded",
    techDetails:
      "Used Express for backend and React for UI. Features token-based authentication. MongoDB for database.",
  },
];

function App() {

  return (
    <div>
      <Routes>         
        <Route element={<NoNavBar/>}>
            <Route path="/welcome" element={<Welcome/>}/>  
            
            <Route path="*" element={<Welcome/>}/>
        </Route>
        <Route element={<WithNavBar/>}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />        
        </Route>
      </Routes>

    </div>
  );
}

export default App;
