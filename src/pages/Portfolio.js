import React, { Component } from "react";
import '../Css/Portfolio.css';

class Portfolio extends Component{
    render() {
        return (

                <div class="container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box mb-5">My porfolio</h2>
                            </div>
                        </div>
                        <div class="card mb-3 border-0" with="max-width: 540px;">
                            <div class="row no-gutters d-flex justify-content-center">
                                <div class="col-md-5 m-2">
                                    <img src="./portfolio.png" class="card-img" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <div class="card-body">
                                        <h5 class="card-title">My Porfolio</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text">
                                            <small class="text-muted">
                                                <button class="btn btn-primary mt-4">Demo</button>
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