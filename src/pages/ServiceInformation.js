import React from "react"; 
import ChevronRightIcone from '@mui/icons-material/ChevronRight';
import WebIcon from '@mui/icons-material/Web';

function SKillFront({ datasService }) {
    return (
    
            <> 

                    {datasService.map(item => (
                                <div className="col-lg-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2">
                                            <WebIcon  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                        </span>
                                        <h3>Web Design</h3>
                                        <p>I creating, maintaining and online applications. </p>
                                        <button type="button" class="btn border-0">
                                            
                                            <span class="text learnmore">Learn more</span>
                                            <ChevronRightIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                        </button>
                                    </div>
                            </div>
                    )
                    )
                    }
            </>
    );
}

export default SKillFront;
