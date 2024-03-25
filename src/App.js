import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=" main">
      <Header />
      <Home />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
