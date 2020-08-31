import React from 'react';
import catoon3 from '../images/catoon3.JPG';

const Footer = () =>(
    <footer className="footer py-5">
        <div className="container text-md-left">
            <div className="row">
                <div className="slide col-12 col-md-4 mb-md-0 mb-3" data-aos="fade-up" data-aos-delay="150">
                    <div className="float-left">
                        <img src={catoon3} className='icon-img'/>
                        <ul className="list-unstyled">
                            <li>
                                <div className=" footer-copyright mt-3">© 2020 Copyright: Ndubuisi Jr Chukuigwe
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;