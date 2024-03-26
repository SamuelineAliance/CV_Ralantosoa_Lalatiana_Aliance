import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ErrorPage from './components/ErrorPage';
import { DataProvider } from './Data/DataContext';
import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ParentComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DataProvider>
      <div className="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Education />
        <Service />
        <Portfolio />
        <Contact />
        <div className="fixed-bottom d-flex justify-content-end m-4">
          <Button onClick={scrollToTop} className="btn1"><KeyboardArrowUpIcon /></Button>
        </div>
        <Footer />
      </div>
    </DataProvider>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ParentComponent />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
