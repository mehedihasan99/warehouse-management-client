import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <Navbar className='py-4' sticky='top' collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Perfect Size</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#clothing">Clothing</Nav.Link>
                            <Nav.Link href="home#men">Men's</Nav.Link>
                            <Nav.Link href="home#women">Women's</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            {
                                user ? <button>Log Out</button> :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;