import React, { createContext, useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import About from "./About/About"
import TechStack from "./TechStack/TechStack"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"
import NavbarMobile from "./Sidebar/NavbarMobile"
import "./App.css"
import ScrollToTop from "react-scroll-to-top"
import WorkExperience from "./WorkExperience/WorkExperience"
import Education from "./Education/Education"
export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <NavbarMobile toggleTheme={toggleTheme} theme={theme} />
        <Sidebar toggleTheme={toggleTheme} theme={theme} />
        <About />
        <WorkExperience />
        <TechStack />

        <Education />
        <Projects />

        <Contact />
      </div>

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  )
}

export default App
