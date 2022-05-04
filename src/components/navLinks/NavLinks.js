import React from "react";
import { 
    Navbar, 
    Container, 
    Nav, 
    NavDropdown, 
    Form, 
    FormControl, 
    Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from "../cartIcon/CartIcon";

function NavLinks () {

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchedProduct = document.querySelector('.search-input').value;
        const searchUrl = `/shop/search/${searchedProduct}`
        navigate(searchUrl)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Super-Shop</Navbar.Brand>
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
                <Form onSubmit={handleSearch} className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 search-input"
                        aria-label="Search"
                        name="a"
                    />
                    <Button  type="submit" className="me-2" variant="outline-success">Search</Button>
                </Form>
                <CartIcon/>
            </Container>
        </Navbar>
    )
}

export default NavLinks;