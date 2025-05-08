import React from "react";
import "./styles/index.css";
import "./styles/media.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
