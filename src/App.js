import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container main">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
