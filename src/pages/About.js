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
                                <div className="col-lg-3 my-2" >
                                    <img src="./images/about.jpg" class="card-img" alt="..." style={{ borderRadius: '10px' }} />
                                </div>
                                <div className="col-lg-4">
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-12">
                                            <div className="about-desc">
                                                <p ><strong>Hi I'm Aliance </strong>mobile app developer with a wealth of expertise and years of practice, specializing in mobile technologies and UI/UX design, dedicated to delivering top-notch solutions</p>
                                                <p >Proficient in crafting, enhancing, securing, and supporting a variety of mobile applications for clients spanning diverse industries.</p>
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