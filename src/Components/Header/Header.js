import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../Css/bootstrap.min.css';
import images from '../../Images/education.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <img src={images} alt=""/>
                <Navbar.Brand href="#home">E-School</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;