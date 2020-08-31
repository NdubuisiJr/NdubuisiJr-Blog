import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import catoon3 from './images/catoon3.JPG';

const NavigationBar = () =>(
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href='/'>
                <img src={catoon3} className='icon-img'/>
            </Navbar.Brand>
            <Navbar.Brand href='/'>
                <h5>Ndubuisi Jr Chukuigwe</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default NavigationBar;