import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-expand-lg">
           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul>
                <li className="nav-item">
                        <Link className="name nav-link mt-3" to="/home">RAKIB</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto nav">
                    {/* <li className="nav-item active">
                        <Link className="nav-link m-1" to="/home">HOME <span className="sr-only"></span></Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link m-1" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link m-1" to="/projects">PROJECTS</Link>                   
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link m-1" to="/blogs">BLOGS</Link>
                    </li> */}
                    
                    <li className="nav-item">
                        <Link className="nav-link m-1" to="/contact">CONTACT</Link>
                    </li>
                    <li className="nav-item resume m-1">
                        <a  className="nav-link resume" href="https://drive.google.com/uc?export=download&id=1McqmgaVsga7214r0cLIa0u2YWQ4CbqH2"> RESUME <FontAwesomeIcon icon={faArrowDown} /> </a>
                        
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;