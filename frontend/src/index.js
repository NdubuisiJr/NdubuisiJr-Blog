import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

//Import images for testing
import './images/Rectangle-58.png';
import './images/Rectangle-60.png';
import './images/Rectangle-59.png';
import './images/pix2.png';

ReactDom.render (
    <App/>,
    document.getElementById('root')
);