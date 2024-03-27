import React from "react";
import '../Css/Footer.css';
import FacebookIcone from '@mui/icons-material/Facebook';
import GitHubIcone from '@mui/icons-material/GitHub';
import LinkedInIcone from '@mui/icons-material/LinkedIn';


function Footer() {
    return(
        <footer class="footer">
            <div class="container py-4">
                <div class="row information text-white d-flex justify-content-center">
                    <div class="col-lg-3">
                        <h1 className="font-weight-bold display-4 ">Aliance</h1>
                    </div>
                    <div class="col-lg-3 d-flex align-items-center ">

                        <a className="nav-link p-2" href="#service">Sevice</a>
                        <a className="nav-link p-2" href="#portfolio">Porfolio</a>
                        <a className="nav-link p-2" href="#contact">Contact Me</a>
                    </div>
                    <div class="col-lg-3 ">
                        <section class="text-center mt-3">
                            <a href="https://www.facebook.com/anceliah.noeliah" target="_blank" rel="noopener noreferrer" class="text-white me-4">
                                <FacebookIcone/>
                            </a>
                            <a href="https://LinkedIn.com/SamuelineAliance" class="text-white me-4">
                                <LinkedInIcone />
                            </a>
                            <a href="https://LinkedIn.com/SamuelineAliance" class="text-white me-4">
                                <GitHubIcone />
                            </a>
                        </section>
                    </div>
                </div>
                 <hr class="my-3" />
                <div  class="text-center p-1 text-secondary" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}} >
                    © 2024 Copyright: Aliance
                </div>
            </div>
        </footer>
    )
}
export default Footer;