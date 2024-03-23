import React from "react";
import '../Css/Footer.css'

function Footer() {
    return(
        <footer class="footer">
            <div class="container-fluid  px-5 py-5">
                <div class="row information container">
                    <div class="col-sm-4">
                        <h1 className="footer-title display-4">Aliance</h1>
                    </div>
                    <div class="col-sm-4 d-flex align-items-center ">
                        <a className="nav-link" >Sevice</a>
                        <a className="nav-link">Porfolio</a>
                        <a className="nav-link">Contact Me</a>
                    </div>
                    <div class="col-sm-4">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;