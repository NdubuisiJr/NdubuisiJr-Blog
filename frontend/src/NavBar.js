import React from 'react';
import { Link } from 'react-router-dom';
import cartoon3 from './images/catoon3.JPG';
import './css/main.css';
import './css/bootstrap.min.css';

const styleI = {
    fontSize:'36px',
    color:'#E3B6A4'
};

const NavBar = () =>(
    <nav className="navbar navbar-expand-sm navbar-fixed-top">
        <div className="container">
            <img src={cartoon3} className="icon-img"/>
            <h5>Ndubuisi Jr Chukuigwe</h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                Toogle
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-3">
                        <Link className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className='nav-link'>Blog</Link>
                    </li> 
                    <li className="nav-item mx-3">
                        <Link className='nav-link'>About</Link>
                    </li>    
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;