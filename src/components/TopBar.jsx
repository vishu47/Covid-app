import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import { Navbar,Nav,Form,Button,NavDropdown,FormControl,Container } from 'react-bootstrap';


const TopBar = () => {
    return (
        <div>
           <Navbar fixed="top" style={{"background" : "#3c3c3c"}} collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand className="brand_name" as={Link} to="/">
                <img width="70" src={Logo} alt="" /> COVID INFO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar_collaps">
                <Nav className="activeClass me-auto ">
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="">State</Nav.Link>
                <Nav.Link as={Link} to="#pricing">Country</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/contact">India</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action/3.2">USA</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action/3.3">Italy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default TopBar;
