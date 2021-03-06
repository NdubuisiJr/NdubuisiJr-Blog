import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import '../css/header.css';

const HeaderStyle = styled.header`
    min-height: 50vh;
    padding-top: 15vh;
    background-image: linear-gradient(rgba(21, 45, 30, 0.4), rgba(21, 45, 30, 0.4)), url(${props=>props.imageUrl});
    background-color: var(--mainGreen); 
    color: var(--mainWhite);
`;

const Header = ({header, imageUrl, imageCaption})=>(
    <HeaderStyle imageUrl={imageUrl}>
        <div>
            <h5>Ndubuisi Jr Chukuigwe</h5>
            <h1>{header}</h1>
            <h6>{imageCaption}</h6>
        </div>
    </HeaderStyle>
);

Header.propTypes = {
    header: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageCaption: propTypes.string
};

export default Header;