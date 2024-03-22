import React from "react";

function Header() {
    return(
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light rounded" aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
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
                </div>
            </nav>
            
        </div>
    )
}
export default Header;