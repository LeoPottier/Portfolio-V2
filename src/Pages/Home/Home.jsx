import { useState, useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import MouseEffect from "../../Components/MouseEffect/MouseEffect";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Project/Project";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Filament from "../../Components/Filament/Filament";
import "./style.scss";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("hero");
  const [displayedComponent, setDisplayedComponent] = useState("hero");
  const [isExiting, setIsExiting] = useState(false);

  const handleNavClick = (component) => {
    if (component !== activeComponent) {
      setIsExiting(true);
      setTimeout(() => {
        setActiveComponent(component);
        setIsExiting(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!isExiting) {
      setDisplayedComponent(activeComponent);
    }
  }, [isExiting, activeComponent]);

  return (
    <main>
      <Header onNavClick={handleNavClick} />{" "}
      <div className="content">
        <Filament />
        <div className={isExiting ? "component-exit" : "component-enter"}>
          {displayedComponent === "hero" && (
            <div className="component-wrapper">
              <Hero />
            </div>
          )}
          {displayedComponent === "about" && (
            <div className="component-wrapper">
              <About />
            </div>
          )}
          {displayedComponent === "skills" && (
            <div className="component-wrapper">
              <Skills />
            </div>
          )}
          {displayedComponent === "projet" && (
            <div className="component-wrapper">
              <Projects />
            </div>
          )}
          {displayedComponent === "contact" && (
            <div className="component-wrapper">
              <Contact />
            </div>
          )}
        </div>
      </div>
      <MouseEffect />
    </main>
  );
};

export default App;
