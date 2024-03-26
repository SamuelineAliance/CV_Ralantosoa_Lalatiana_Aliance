import React from "react"; 
import ArrowBackIcone from '@mui/icons-material/Work';

function Education2({ datasform }) {
    return (
    
                                <>
                                    <h5 className="py-4"> 
                                    <ArrowBackIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                                        <span className="p-4">Formation</span>
                                    </h5>
                                    <div className="d-flex justify-content-end">
                                        <div className="accordion col-10 ml-2" id="accordionExample">
                                        {datasform.map(item => (
                                            <div className="accordion-item" key={item.id}>
                                                <h4 className="accordion-header" id={item.heading}>
                                                    <button className="accordion-button EducationDark collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.databstarget}`} aria-expanded="false" aria-controls={item.databstarget}>
                                                        {item.nom}
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
