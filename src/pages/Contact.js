import React, { Component } from "react";
import Information from "./Information";
import '../Css/Contact.css';


class Contact extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Information />
                    </div>
                    <div className="col-sm-6">
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
        );
    }
}
export default Contact;