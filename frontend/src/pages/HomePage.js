import React from 'react';
import Header from '../components/Header';
import pix2 from '../images/pix2.png';

const HomePage = () =>(
    <>
        <Header header='Loves Building Software' imageUrl={pix2}/>
        <div className='container'>
            <div className='row my-5'></div>
        </div>
    </>
);

export default HomePage;