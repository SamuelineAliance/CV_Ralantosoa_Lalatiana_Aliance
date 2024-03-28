import React from "react"; 
import ArrowBackIcone from '@mui/icons-material/DataObject';

function SKillBack({ datasBack }) {
    return (
    
            <>
            <h5 className="py-4"> 
                <ArrowBackIcone className="arrow" style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
                    <span className="p-4">Back end</span>
            </h5>

            {datasBack.map(item => (
                <div className="d-flex justify-content-end" key={item.id}>
                    <div className="progress-wrap col-10">
                        <h5 className="d-flex justify-content-between">{item.nom} <span className="text-black-50 ProgressText">{item.information}%</span></h5>
                        <div className="form-group ">
                            <input type="range" class="form-control-range custom-range" id="formControlRange" min="0" max="100" value={item.information}/>
                        </div>
                    </div>
                </div>
            )
            )
            }
            </>
    );
}

export default SKillBack;
