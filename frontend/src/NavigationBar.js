import React from 'react';
import catoon3 from './images/catoon3.JPG';
import './css/navBar.css';
const NavigationBar = () =>(
    <div className='example'>
        <nav>
            <div>
                Example nav
            </div>
            <img src={catoon3}/>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </nav>
    </div>
);

export default NavigationBar;