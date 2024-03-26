import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajoutez cette ligne pour importer le fichier CSS de Bootstrap
import SchoolIcone from '@mui/icons-material/School';
import ArrowBackIcone from '@mui/icons-material/Work';

class Education extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="container">
                    <section className="colorlib-skills" data-section="skills">
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                    <span className="heading-meta">My Specialty</span>
                                    <h2 className="colorlib-heading animate-box">My Education</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                </div>
                                <div className="row">
                                    <div className="col-md-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                        <h5 className="py-4"> 
                                            <SchoolIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                            <span className="p-4">Education</span>
                                        </h5>
                                        <div className="d-flex justify-content-end">
                                            <div className="accordion col-10 ml-2" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h4 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            Deuxième année
                                                        </button>
                                                    </h4>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>.</strong> Languages: C, C++
                                                            Web Technologies: HTML5, CSS3, PHP, JavaScript
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Première année
                                                        </button>
                                                    </h4>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the second item's accordion body.</strong> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Baccalauréat Série D
                                                        </button>
                                                    </h4>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the third item's accordion body.</strong> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                        <h5 className="py-4"> 
                                            <ArrowBackIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                            <span className="p-4">Formation</span>
                                        </h5>
                                        <div className="d-flex justify-content-end">
                                            <div className="accordion col-10 ml-2" id="accordionExample">
                                                <div className="accordion-item ">
                                                    <h4 className="accordion-header" id="headingOne1">
                                                        <button className="accordion-button EducationDark EducationDark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                                            Formation en internet des objets
                                                        </button>
                                                    </h4>
                                                    <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong></strong> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                        Formation en cybersécurité
                                                        </button>
                                                    </h4>
                                                    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the second item's accordion body.</strong> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Education;
