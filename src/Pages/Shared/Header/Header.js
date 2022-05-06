import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth)
    }
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
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                                    <Nav.Link as={Link} to="/addProduct">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
                                </>
                            }
                            {
                                user ? <button
                                    onClick={handleLogOut}
                                    className='log-btn bg-primary text-white'>Log Out</button> :
                                    <Nav.Link as={Link} to="/login">
                                        <button className='log-btn bg-primary text-white px-2'>Login</button>
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;