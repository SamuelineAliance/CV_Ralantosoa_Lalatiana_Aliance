import React from "react";
import '../Css/Service.css';
import '../Css/About.css';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ChevronRightIcone from '@mui/icons-material/ChevronRight';
import WebIcon from '@mui/icons-material/Web';


function Service() {
    
    return(
        <div className="container">
         <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box mb-4">My Specialty</h2>
                        </div>
                    </div>
                    <div className="row" data-animate-effect="fadeInLeft">
                        <div className="col-md-12 animate-box mt-4" data-animate-effect="fadeInLeft">

                        </div>
                    
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div className="services color-2">
                                    <span className="icon2">
                                        <WebIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </span>
                                    <h3>Web Design</h3>
                                    <button type="button" class="btn">
                                        <span class="text learnmore">Learn more</span>
                                            <ChevronRightIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                <div className="services color-3">
                                    <span className="icon2"> 
                                        <StorageIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </span>
                                    <h3>Software</h3>
                                    <button type="button" class="btn">
                                        <span class="text learnmore">Learn more</span>
                                        <ChevronRightIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                <div className="services color-4">
                                    <span className="icon2">
                                        <PhoneAndroidIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </span>
                                    <h3>Application</h3>
                                    <button type="button" class="btn">
                                        <span class="text learnmore">Learn more</span>
                                            <ChevronRightIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                    </button>
                                </div>
                            </div> 
                        </div>       
                    </div>            
			    </div>
			</section>
        </div>
    )
}
export default Service;