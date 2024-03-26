import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Css/Portfolio.css';

class Portfolio extends Component{
    render() {
        return (

                <div class="container">
                        <div className="row" id="portfolio">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My project</span>
                                <h2 className="colorlib-heading animate-box mb-5">My porfolio</h2>
                            </div>
                        </div>
                        <div class="card mb-3 border-0  ContainerPorfolio" with="max-width: 540px;">
                            <div class="row no-gutters d-flex justify-content-center">
                                <div class="col-lg-5 m-2">
                                    <img src="./images/portfolio.PNG" class="card-img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <div class="card-body">
                                        <h5 class="card-title TextDark">My Porfolio</h5>
                                        <p class="card-text TextDark">Crafting an adaptive website equipped with UI components and captivating animated interactions, ensuring seamless user experience across all devices.</p>
                                        <p class="card-text">
                                            <small class="text-muted" style={{ with: "200px !important" }}>
                                                <Link to="/failed" type="button" class="text-decoration-none button button--wayra button--border-thin button--round-s d-flex justify-content-center" >Demo</Link>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="container conatiner2  text-white ">
                            <div className="row portfolio border rounded p-4 ">
                                <div className="col-sm-6 col-md-6">
                                    <img src="..." class="card-img-top" alt="..." />
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div class="card-body">
                                        <h2 class="card-title font-weight-bolder my-4">You have a new project</h2>
                                        <p class="card-text my-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button class="btn btn-primary mt-4">Contact me</button>
                                    </div> 
                                </div>
                            </ div >
                        </ div > */}

                    </div>
        )
    }
}
export default Portfolio;