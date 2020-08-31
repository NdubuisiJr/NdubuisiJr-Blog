import React from 'react';
import Header from '../components/Header';
import pix2 from '../images/pix2.png';
import DisplayLayout from '../components/DisplayLayout';

const HomePage = () =>(
    <>
        <Header header='Loves Building Software' imageUrl={pix2}/>
        <DisplayLayout content='This is the home page'/>
    </>
);

export default HomePage;