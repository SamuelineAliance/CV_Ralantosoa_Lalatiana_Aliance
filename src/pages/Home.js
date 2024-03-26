
import React, { useContext } from 'react';
import DataContext from '../Data/DataContext';

// import '../Css/Home.css';
import FacebookIcone from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcone from '@mui/icons-material/LinkedIn';
import GitHubIcone from '@mui/icons-material/GitHub';

function Home() {
    const { userData } = useContext(DataContext);
    return(
        // <div className="App" style={{ background: 'url(./images/about.jpg)', height:'500px' }}>
        <div className="container">
            <div className="row p-5 rounded">
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className=" py-5 rounded">
                        <div className="col-lg-8 mx-auto">
                            <div class="container">
                                    <div class="spin-container">
                                        <div class="shape my-5">
                                            <div class="bd">
                                                <img src="./images/home.png" class="card-img" alt="..." style={{ borderRadius: '50%', height: "300px" , width:'300px'}} />
                                            </div>
                                        </div>
                                            <section class="text-center mt-3 col-10">
                                                <a href="https://www.facebook.com/anceliah.noeliah" target="_blank" rel="noopener noreferrer" class="text-white me-4">
                                                    <FacebookIcone  style={{ color: 'white', backgroundColor: '#3f51b5', borderRadius: '50%'}}/>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <LinkedInIcone style={{ color: 'white', backgroundColor: '#3f51b5', borderRadius: '50%'}}/>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <GitHubIcone style={{ color: 'white', backgroundColor: '#3f51b5', borderRadius: '50%'}}/>
                                                </a>
                                            </section>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-4 rounded" style={{ marginTop: '100px' }}>
                        <div className=" col-sm-8 col-md-8 col-lg-8 mx-5">
                            <h1 className="display-4">Hello, <br/> I'm {userData.name}</h1>
						   	<h5>Advanced proficiency in web application development, coupled with a strong foundation in web design, consistently delivering top-tier results.</h5>
                            <div className="my-5">
                                <a href="#contact" class="button button--wayra button--border-thin button--round-s text-decoration-none">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;