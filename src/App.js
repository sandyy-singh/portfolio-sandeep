import "./App.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Galary from "./components/Galary";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Galary" element={<Galary />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
