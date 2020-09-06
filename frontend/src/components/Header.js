import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    min-height: 50vh;
    padding-top: 15vh;
    background-image: linear-gradient(rgba(21, 45, 30, 0.4), rgba(21, 45, 30, 0.4)), url(${props=>props.imageUrl});
    background-color: var(--mainGreen); 
    color: var(--mainWhite);
`;

const Header = ({header, imageUrl, imageCaption})=>(
    <HeaderStyle imageUrl={imageUrl} className="header">
        <div className="container-fluid">
            <div className="row height-max index-header  align-items-center text-center text-uppercase">
                <div className="mx-auto text-uppercase">
                    <h5>Ndubuisi Jr Chukuigwe</h5>
                    <h1>{header}</h1>
                    <h6>{imageCaption}</h6>
                </div>
            
            </div>
        </div>
    </HeaderStyle>
);

Header.propTypes = {
    header: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageCaption: propTypes.string
};

export default Header;