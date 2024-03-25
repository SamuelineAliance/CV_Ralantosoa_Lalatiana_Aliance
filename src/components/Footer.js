import React from "react";
import '../Css/Footer.css';
import FacebookIcone from '@mui/icons-material/Facebook';
import GoogleIcone from '@mui/icons-material/Google';
import GitHubIcone from '@mui/icons-material/GitHub';


function Footer() {
    return(
        <footer class="footer">
            <div class="container-fluid  px-5 py-4">
                <div class="row information container text-white">
                    <div class="col-sm-4">
                        <h1 className="font-weight-bold display-4 ">Aliance</h1>
                    </div>
                    <div class="col-sm-4 d-flex align-items-center ">

                        <a className="nav-link p-2" href="">Sevice</a>
                        <a className="nav-link p-2" href="">Porfolio</a>
                        <a className="nav-link p-2" href="">Contact Me</a>
                    </div>
                    <div class="col-sm-4 ">
                        <section class="text-center mt-3">
                            <a href="" class="text-white me-4">
                                <FacebookIcone />
                            </a>
                            <a href="" class="text-white me-4">
                                <GoogleIcone/>
                            </a>
                            <a href="" class="text-white me-4">
                                <GitHubIcone />
                            </a>
                        </section>
                    </div>
                </div>
                 <hr class="my-3" />
                <div  class="text-center p-1" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}} >
                    © 2020 Copyright: Aliance
                </div>
            </div>
        </footer>
    )
}
export default Footer;