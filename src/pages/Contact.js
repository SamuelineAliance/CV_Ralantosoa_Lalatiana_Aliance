import React, { Component } from "react";
import Information from "./Information";
import '../Css/Contact.css';


class Contact extends Component{
    render() {
        return (
            <div className="container">
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box text-center" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box my-5">Contact me</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-5 col-md-5">
                                <Information />
                            </div>
                            <div className="col-sm-7 col-md-7">
                                <form className="">
                                    <div class="form-group row">
                                        <div class="col-sm-10">
                                            <div class="form-floating mb-4">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-10">
                                            <div class="form-floating mb-4">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Email</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-10">
                                            <div class="form-floating mb-4">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Project</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-10 mb-4">
                                            <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message" height="30"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contact;