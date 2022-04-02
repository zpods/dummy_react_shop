import React from "react";
import { 
    Navbar, 
    Container, 
    Nav, 
    NavDropdown, 
    Form, 
    FormControl, 
    Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartIcon from "../cartIcon/CartIcon";

function NavLinks () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Super-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login/Register</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/aaaa">Action</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/baaa">Actionb</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/caaa">Actionc</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>                
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <CartIcon/>
            </Container>
        </Navbar>
    )
}

export default NavLinks;