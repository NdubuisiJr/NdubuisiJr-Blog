import React from 'react';
import propTypes from 'prop-types';
import '../css/main.css';

const Header = ({header})=>(
    <header className="header">
        <div className="container-fluid">
            <div className="row height-max index-header  align-items-center text-center text-uppercase">
                <div className="mx-auto text-uppercase">
                    <h5>Ndubuisi Jr Chukuigwe</h5>
                    <h1>{header}</h1>
                </div>
            
            </div>
        </div>
    </header>
);

Header.propTypes = {
    header: propTypes.string.isRequired
};

export default Header;