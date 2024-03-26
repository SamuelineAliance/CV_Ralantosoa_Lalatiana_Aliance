import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajoutez cette ligne pour importer le fichier CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajoutez cette ligne pour importer le fichier CSS de Bootstrap

import DataEducation from "../Data/DataEducation";
import DataFormation from "../Data/DataFormation";
import Education2 from "./Education2";
import Formation2 from "./Formation2";

class Education extends Component {
    
    render() {
        return (

                <div className="container">
                    <section className="colorlib-skills" data-section="skills">
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                    {/* <span className="heading-meta">My Specialty</span> */}
                                    <h2 className="colorlib-heading animate-box">My Education</h2>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-lg-6 animate-box" data-animate-effect="fadeInLeft">
                                        <Education2 datas={DataEducation}/>
                                    </div>
                                    <div className="col-lg-6 animate-box" data-animate-effect="fadeInLeft">
                                        <Formation2 datasform={DataFormation}/>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
        );
    }
}

export default Education;
