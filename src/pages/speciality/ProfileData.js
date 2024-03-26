import ContentData from "./ContentData";
import ChevronRightIcone from '@mui/icons-material/ChevronRight';
import { useState } from "react";

const ProfileData = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
   
    };
    return (
        <div className="card border-0">
            <ContentData isCollapsed={isCollapsed} Information={props.welcome}/>
            <button onClick={toggleCollapse} type="button" class="btn border-0">
                <span class="text learnmore">Learn More</span>
                   <ChevronRightIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
             </button>
             
        </div>
    )
}
export default ProfileData;