import React from "react";
import '../Css/About.css';
import DownloadButton from '../components/Download';


function About() {
    return(
        <div className="container">
					<div id="about" className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div  className="about-desc text-center mb-4 p-4">
										<span className="heading-meta">About Us</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
									</div>
								</div>
							</div>
							<div className="row d-flex justify-content-center">
                                <div className="col-md-3 my-2" >
                                    <img src="./images/about.jpg" class="card-img" alt="..." style={{ borderRadius: '10px' }} />
                                </div>
                                <div className="col-md-4">
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-12">
                                            <div className="about-desc">
                                                <p ><strong>Hi I'm Aliance Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin </p>
                                                <p >On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin </p>
                                                <DownloadButton/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
        </div>
    )
}
export default About;