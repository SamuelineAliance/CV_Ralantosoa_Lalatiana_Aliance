
import React from "react";
// import '../Css/Home.css';

function Home() {
    return(
        // <div className="App" style={{ background: 'url(./images/about.jpg)', height:'500px' }}>
        <div className="App" style={{ background: 'white', height:'600px' }}>
            <div className="row p-5 rounded">
                <div className="col-sm-6">
                    <div className="p-4 rounded" style={{ marginTop: '100px' }}>
                        <div className="col-sm-8 mx-auto">
                            <h1 className="display-4">Hi, <br/> I'm Aliance</h1>
						   	<h5>High level experience in cybersecurity, web design and development knowledge, producing quality work. </h5>
                               

                                <div className="my-5">
                                    <button className="bg-primary roudend-0 p-3">
                                        Contact me
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className=" py-5 rounded">
                        <div className="col-sm-8 mx-auto">
                        <div class="container">
                            <div class="box">
                                <div class="spin-container">
                                    <div class="shape">
                                        <div class="bd">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;