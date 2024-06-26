
import DarkMode from "./Darkmode";
import React, { useContext } from 'react';
import DataContext from '../Data/DataContext';

function Header() {

    const { userData } = useContext(DataContext);
    return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white p-3  border border-top-0" aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse justify-content-md-end" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item text-secondary ">
                            {userData.name}
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Sevice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <DarkMode />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Header;