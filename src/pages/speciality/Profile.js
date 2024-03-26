import React, {Component} from "react";
import ProfileData from "./ProfileData";
import WebIcon from '@mui/icons-material/Web';


class Profile extends Component{
    
    render() {
        return (
            <div className="col-lg-3 animate-box" data-animate-effect="fadeInRight">
                <div className="services color-2">
                    <span className="icon2">
                        <WebIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    </span>
                    <h3>{this.props.info.name}</h3>
                    <ProfileData welcome={this.props.info}/>
                </div>
            </div>
        )

    }
}
export default Profile;