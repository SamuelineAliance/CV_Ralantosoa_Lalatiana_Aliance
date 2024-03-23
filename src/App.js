import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import Education from "./pages/Education";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className=" main">
      <Header />
      <Home />
      <About />
      <Skills />
      {/* <Education /> */}
      <Footer/>
    </div>
  );
}

export default App;
