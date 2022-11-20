import React from "react";
import { 
    Navbar, 
    Container, 
    Nav, 
    Form, 
    FormControl, 
    Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import CartIconContainer from "../cartIconContainer/CartIconContanier";
import { useSelector } from 'react-redux';
import styles from './NavLinks.module.css';

function NavLinks () {

    const navigate = useNavigate();
    const { isAuth, email } = useSelector(state => state.loginRegisterLogout);

    const handleClick = () => {
        const navBar = document.getElementById("basic-navbar-nav");
        navBar.classList.add('animateCloseNavbar');
        setTimeout(() => {
            navBar.classList.remove('show')
        }, 275)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const searchedProduct = document.querySelector('.search-input').value;
        const searchUrl = `/shop/search/${searchedProduct}`
        navigate(searchUrl)
    }

    return (
        <Navbar className="vw-100" bg="dark" variant="dark" expand="lg">
            <Container className={styles.parent}>              
            <Navbar.Brand as={Link} to="/" className={styles.navBrandButton}>Super-Shop</Navbar.Brand>
            <Navbar.Toggle className={styles.navToggleButton} aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse  className={styles.menu} id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} to="/" onClick={() => handleClick()}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" onClick={() => handleClick()}>About</Nav.Link>
                    <Nav.Link as={Link} to={{pathname:"/shop"}} onClick={() => handleClick()}>Shop</Nav.Link>                    
                    { isAuth &&  <Nav.Link as={Link} to="/logout" onClick={() => handleClick()}>Logout</Nav.Link> }                 
                    { !isAuth && 
                        <React.Fragment>
                            <Nav.Link as={Link} to="/login" onClick={() => handleClick()}>Login</Nav.Link>
                            <Nav.Link as={Link} to="/register" onClick={() => handleClick()} >Register</Nav.Link> 
                        </React.Fragment>
                    }
                </Nav>               
            </Navbar.Collapse>        
                { email && <div className={styles.loggedUser}>Logged { email }</div> }               
                <Form onSubmit={handleSearch} className={styles.navBrandSearch}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 search-input"
                        aria-label="Search"
                        name="search"
                    />
                    <Button  type="submit" className="me-2" variant="outline-success">Search</Button>
                </Form>        
                 <CartIconContainer/>
            </Container>
        </Navbar>
    )
}

export default NavLinks;