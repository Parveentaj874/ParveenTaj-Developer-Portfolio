import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import AnimatedBackground from "./components/AnimatedBackground";
import IntroLoader from "./components/IntroLoader";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AnimatedBackground />
          <Hero />
          <About />
          <Experience />
          <Academics />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
