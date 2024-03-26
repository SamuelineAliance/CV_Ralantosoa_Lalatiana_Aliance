import React, { Component } from "react";
import '../Css/Skills.css';
import ArrowBackIcone from '@mui/icons-material/DataObject';



class Skills extends Component{
    render() {
        return (
            <div className="container">
                <section id="skills" className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box">My Skills</h2>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-lg-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                    <h5 className="py-4"> 
                                        <ArrowBackIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                        <span className="p-4">Font end</span>
                                    </h5>
                                    <div className="d-flex justify-content-end">
                                        <div className="progress-wrap col-10">
                                            <h5 className="d-flex justify-content-between">HTML 5 <span className="text-black-50 ProgressText">75%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="75"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="progress-wrap col-10">
                                            <h5 className="d-flex justify-content-between">CSS <span className="text-black-50 ProgressText">50%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="50"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="progress-wrap col-10">
                                            <h5 className="d-flex justify-content-between">Javascript <span className="text-black-50 ProgressText">40%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="40"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="progress-wrap col-10">
                                            <h5 className="d-flex justify-content-between">React <span className="text-black-50 ProgressText">30%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="30"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                    <h5 className="py-4"> 
                                        <ArrowBackIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                        <span className="p-4">Back end</span>
                                    </h5>
                                    <div className="d-flex justify-content-end">
                                        <div className="progress-wrap col-10">
                                            <h5 className="d-flex justify-content-between">PHP <span className="text-black-50 ProgressText">60%</span></h5>
                                            <div className="form-group ">
                                                <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="60"/>
                                            </div>
                                        </div>
                                    </div>
                                <div className="d-flex justify-content-end">
                                    <div className="progress-wrap col-10">
                                        <h5 className="d-flex justify-content-between">MongoDB <span className="text-black-50 ProgressText">40%</span></h5>
                                        <div className="form-group ">
                                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="40"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="progress-wrap col-10">
                                        <h5 className="d-flex justify-content-between">Node Js<span className="text-black-50 ProgressText">35%</span></h5>
                                        <div className="form-group ">
                                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value="35"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}
export default Skills;