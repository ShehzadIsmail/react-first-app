//import React from 'react'
// import logo from '/images/logo.png'
import './Header.css'

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-inner">
                <div className="item">
                <img src='/images/logo.png' alt="" />
                </div>
                <div className="item">
                    <ul>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Register/Login</a></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle = "collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className="nav-link" href="#">EVERYDAY VALUE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MAKE IT A MEAL</a></li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">SIGNATURE BOXES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHARING</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PROMOTIONS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SNACKS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MIDNIGHT DEALS</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="navitem">0</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header