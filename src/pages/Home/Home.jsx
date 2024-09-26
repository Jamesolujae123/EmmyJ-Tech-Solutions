import React from "react";
import Hero from "../../components/Hero/Hero";
import IconHub from "../../components/IconH/IconHub";
import How from "../../components/How/How";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <IconHub />
      <How />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
