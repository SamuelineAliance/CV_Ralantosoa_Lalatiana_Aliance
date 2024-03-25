
import React from "react";
// import '../Css/Home.css';
import FacebookIcone from '@mui/icons-material/Facebook';
import GoogleIcone from '@mui/icons-material/Google';
import GitHubIcone from '@mui/icons-material/GitHub';

function Home() {
    return(
        // <div className="App" style={{ background: 'url(./images/about.jpg)', height:'500px' }}>
        <div className="App" style={{ height:'600px' }}>
            <div className="row p-5 rounded">
                <div className="col-sm-6 d-flex justify-content-center">
                    <div className=" py-5 rounded">
                        <div className="col-sm-8 mx-auto">
                            <div class="container">
                                    <div class="spin-container">
                                        <div class="shape my-5">
                                            <div class="bd">
                                                <img src="./images/home.png" class="card-img" alt="..." style={{ borderRadius: '50%', height: "300px" , width:'300px'}} />
                                            </div>
                                        </div>
                                        <section class="text-center mt-3 d-flex justify-content-center">
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
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="p-4 rounded" style={{ marginTop: '100px' }}>
                        <div className="col-sm-8 mx-auto">
                            <h1 className="display-4">Hello, <br/> I'm Aliance</h1>
						   	<h5>High level experience in cybersecurity, web design and development knowledge, producing quality work. </h5>
                            <div className="my-5">
                                <button class="button button--wayra button--border-thin button--round-s">Contact Me</button>
                            </div>
                            <div className="my-5">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;