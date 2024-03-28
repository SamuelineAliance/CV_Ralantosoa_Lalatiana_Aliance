import React, { Component } from "react";
import '../Css/Skills.css';
import { DataFront, DataBack } from "../Data/DataSkills";
import SkillFront from "./SkillFront";
import SKillBack from "./SkillBack";


class Skills extends Component{
    render() {
        return (
            <div className="container">
                <section id="skills" className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                <span className="heading-meta"></span>
                                <h2 className="colorlib-heading animate-box">My Skills</h2>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-lg-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                    <SkillFront datasfrs={DataFront}/>
                                </div>
                                <div className="col-lg-6 animate-box p-5" data-animate-effect="fadeInLeft">
                                    <SKillBack datasBack={DataBack}/>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}
export default Skills;