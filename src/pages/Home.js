import React from "react";
import '../Css/Home.css';
import DownloadButton from '../components/Download';

function Home() {
    return(
        <div className="App">
            <div className="row bg-light p-5 rounded">
                <div className="col-sm-6">
                    <div className="bg-light p-5 rounded">
                        <div className="col-sm-8 mx-auto">
                        <div class="container">
                            <div class="box">
                                <div class="spin-container">
                                    <div class="shape">
                                        <div class="bd">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="bg-light p-5 rounded">
                        <div className="col-sm-8 mx-auto">
                            <h1 className="display-4 ">Hi, <br/> I'm Aliance</h1>
						   	<h5>High level experience in cybersecurity, web design and development knowledge, producing quality work. <a href="https://colorlib.com/" target="_blank"></a></h5>
							<p className="mt-4">
                                <a className="btn btn-primary btn-learn">
                                    <DownloadButton/> <i class="icon-download4"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;