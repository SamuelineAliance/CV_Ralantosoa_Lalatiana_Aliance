import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../Css/ErrorPage.css';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidRoute: true
    };
  }

  componentDidMount() {
    // Vérifiez ici si la route est valide, par exemple en comparant avec une liste de routes autorisées
    const isValidRoute = this.checkIfValidRoute();
    this.setState({ isValidRoute });
  }

  checkIfValidRoute = () => {
    // Implémentez votre logique pour vérifier si la route est valide
    // Par exemple, vérifiez si la route actuelle correspond à une route autorisée
    // Vous pouvez utiliser location.pathname pour obtenir le chemin de la route actuelle
    const validRoutes = ['/']; // Liste des routes autorisées
    return validRoutes.includes(window.location.pathname);
  }

  render() {
    const { isValidRoute } = this.state;

    // Si la route est valide, ne faites rien et laissez l'utilisateur sur la page actuelle
    if (isValidRoute) {
      return null;
    }

    // Sinon, redirigez l'utilisateur vers la page "Failed"
    return (

        <div>
            <Navigate to="/failed" />

            <section className='Error'>
                <div className="container">
                <div className="text">
                    <h1>Page Not Found</h1>
                    <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                    <div className="input-box">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fa-solid fa-search"></i></button>
                    </div>
                    <ul className="menu">
                    <li><Link to="/">Go to Homepage</Link></li>
                    </ul>
                </div>
                <div><img className="image" src="images/errorimg.png" alt="" /></div>
                </div>
            </section>
        </div>  
    );
  }
}

export default ErrorPage;
