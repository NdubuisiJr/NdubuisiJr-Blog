import React from 'react';
import catoon3 from '../images/catoon3.JPG';
import '../css/footer.css';

const Footer = () =>(
    <footer >
        <div>
            <img src={catoon3}/>
            <ul>
                <li>
                    <div>
                        © 2020 Copyright: Ndubuisi Jr Chukuigwe
                    </div>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;