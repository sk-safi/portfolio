import React from "react";
import logo from "../safi_logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbarr = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className = 'logo' src  = {logo} alt = "logo...."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                 aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon = { faBars } style= {{color : "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link " aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Skils</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Done before</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="#">Contact Us</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    )
}


export default Navbarr;