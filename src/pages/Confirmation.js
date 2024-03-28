import React, { Component } from "react";
import '../Css/Confirmation.css';


class Confirmation extends Component{
    render() {
        return (
                <section className='Confirmation'>
                    <div className="container">
                        <div className="text">
                            <h1>Your Message is Abrediali Confirmed</h1>
                            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                            <div className="input-box">
                                <input type="text" placeholder="Search..." />
                                <button><i className="fa-solid fa-search"></i></button>
                            </div>
                            <ul className="menu"></ul>
                        </div>
                    </div>
                </section>
        );
    }
}
export default Confirmation;