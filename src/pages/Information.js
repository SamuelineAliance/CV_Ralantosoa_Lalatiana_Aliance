import React, { Component } from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/Room';

class Information extends Component {
    render() {
        return (
            <div className="col-md-5 col-sm-5">
                <div className="row my-2" data-animate-effect="fadeInLeft">
                    <div className="colorlib-icon  col-md-4 col-sm-4">
                        <CallIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    </div>
                    <div className="col-8">
                        <h3 classNameName="">Call</h3 >
                        <span classNameName=" text-muted">+033 24 820 38</span >
                    </div>
                </div>
                <div className="row" data-animate-effect="fadeInLeft">
                    <div className="colorlib-icon col-4">
                        <EmailIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    </div>
                    <div className="colorlib-text col-8">
                        <h3 classNameName="">Call</h3 >
                        <span classNameName=" text-muted">Call me</span >
                    </div>
                </div>
                <div className="row" data-animate-effect="fadeInLeft">
                    <div className="col-4">
                        <LocationIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    </div>
                    <div className="col-8">
                        <h3 classNameName="">Location</h3 >
                        <span classNameName=" text-muted">Morondava</span >
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;
