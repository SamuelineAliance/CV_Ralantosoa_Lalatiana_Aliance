import React from "react";
import Brightness4Icone from '@mui/icons-material/NightlightOutlined';


function Header() {
    return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white p-3  border border-top-0" aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                Aliance
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-md-end" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Sevice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contact me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Brightness4Icone />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Header;