import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom" 

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className = "navbar">
                <div>
               <Router>     
                <Link to = "/" className = "navbar-logo"> Landkit. </Link>
                <Link to = "/" className = "navbar-p"> Landings </Link>
                <Link to = "/" className = "navbar-p"> Pages </Link>
                <Link to = "/" className = "navbar-p"> Account </Link>
                <Link to = "/" className = "navbar-p"> Documentation </Link>
                <Link to = "/" className = "navbar-button"> <button> Buy now </button> </Link>
              </Router> 
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
