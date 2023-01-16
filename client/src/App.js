import React, { useState } from "react";
import Nav from './components/Nav';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Stack from "./components/Stack";
import About from "./components/About";
import Footer from "./components/Footer";
import './global.css';
import './light.css';
import './dark.css';

function App() {
  const [theme, setTheme] = useState(!true);
  const toggleTheme = () => {
    setTheme(!theme)
  }
  return (
    <div id={theme ? 'light' : 'dark'} className="bg">
      <div className="app">
        <Nav toggleTheme={toggleTheme} />
        <Intro />
        <Projects />
        <Stack />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
