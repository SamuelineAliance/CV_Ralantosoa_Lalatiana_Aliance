import React from "react"; 
import SchoolIcon from '@mui/icons-material/School';

function Education2({ datas }) {
    return (
    
            <>
                <h5 className="py-4"> 
                    <SchoolIcon className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    <span className="p-4">Education</span>
                </h5>
                <div className="d-flex justify-content-end">
                    <div className="accordion col-10 ml-2" id="accordionExample">
                    {datas.map(item => (
                        <div className="accordion-item" key={item.id}>
                            <h4 className="accordion-header" id={item.heading}>
                                <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.databstarget}`} aria-expanded="true" aria-controls={item.databstarget}>
                                    {item.date}
                                </button>
                            </h4>
                            <div id={item.databstarget} className="accordion-collapse collapse show" aria-labelledby="{item.heding}" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {item.information}
                                </div>
                            </div>
                        </div>

                            )
                            )
                            }
                    </div>
                </div>
            </>
    );
}

export default Education2;
