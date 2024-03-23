import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Information extends Component{
    render() {
        return (

            <div class="col-md-5">
                <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                    <div class="colorlib-icon">
                        <i class="icon-globe-outline"></i>
                    </div>
                <div class="colorlib-text">
                    <p><a href="#">info@domain.com</a></p>
                </div>
                </div>
                    <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div class="colorlib-icon">
                            <i class="icon-map"></i>
                        </div>
                    <div class="colorlib-text">
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                </div>

                <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                    <div class="colorlib-icon">
                        <i class="icon-phone"></i>
                    </div>
                    <div class="colorlib-text">
                        <p><a href="tel://">+123 456 7890</a></p>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Information;