import React, { Component } from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/Room';

class Information extends Component {
    render() {
        return (
            <div className="">
                        < div className="col-lg-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-text">
                                    <p className="TextDark">Contact</p >
									<p className="text-secondary">+0332156367</p>
								</div>
                                <div className="colorlib-icon mt-4">
                                    <CallIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }} className="my-4"/>
								</div>
							</div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								
                                <div className="colorlib-text">
                                    <p className="TextDark">Email</p >
									<p className="text-secondary">ralantosoalalatiana@gmail.com</p>
								</div>
                                <div className="colorlib-icon mt-4">
                                    <EmailIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }} className="my-4"/>
								</div>
							</div>
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								
                                <div className="colorlib-text ">
                                    <p className="TextDark">Location</p >
									<p className="text-secondary ">Morondava-MAdagascar</p>
								</div>
                                <div className="colorlib-icon mt-4">
                                    <LocationIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }} className="my-4"/>
								</div>
							</div>
						</div>

            </div>
        );
    }
}

export default Information;
