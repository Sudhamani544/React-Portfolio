import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Myself from "./components/Myself";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Theme from "./components/Theme";
import { ThemeContext } from "./context";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
      <Navbar />
      <Theme />
      <Routes>
        <Route path="/" element={<Myself />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
