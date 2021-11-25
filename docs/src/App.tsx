import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Myself from "./components/Myself";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Myself />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
