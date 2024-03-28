import React, { Component } from "react";
import '../Css/Skills.css';


class Skills2 extends Component{
    render() {
        return (
                <section className="colorlib-skills" data-section="skills">
                    <article class="my-3" id="accordion">
                        {/* <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <a class="d-flex align-items-center" href="../components/accordion/">Documentation</a>
                        </div> */}
                        <div>
                            <div class="bd-example">
                                <div class="accordion row" id="accordionExample">
                                    <div class="accordion-item col-6">
                                        <h4 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Front-End
                                            </button>
                                        </h4>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="col-md-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                        <div className="progress-wrap">
                                            <h5 className="d-flex justify-content-between">HTML 5 <span className="text-black-50">75%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="75"/>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h5 className="d-flex justify-content-between">CSS <span className="text-black-50">50%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="50"/>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h5 className="d-flex justify-content-between">Javascript <span className="text-black-50">40%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="40"/>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h5 className="d-flex justify-content-between">React <span className="text-black-50">30%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="30"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    </div>
                                    <div class="accordion-item col-6">
                                        <h4 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Back-End
                                            </button>
                                        </h4>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className="col-md-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                                    <div className="progress-wrap">
                                                        <h5 className="d-flex justify-content-between">PHP <span className="text-black-50">60%</span></h5>
                                                        <div className="form-group ">
                                                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="60"/>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h5 className="d-flex justify-content-between">MongoDB <span className="text-black-50">40%</span></h5>
                                                        <div className="form-group ">
                                                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="40"/>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h5 className="d-flex justify-content-between">Node Js<span className="text-black-50">35%</span></h5>
                                                        <div className="form-group ">
                                                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="35"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

        );
    }
}
export default Skills2;