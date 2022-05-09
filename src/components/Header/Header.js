import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from './../../img/logo-red.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            user ?
                                <Nav className="ms-auto">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/manage'>Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to='/add'>Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                                    <button onClick={() => signOut(auth)} className='theme-btn ms-2'>LogOut</button>
                                </Nav>
                                :
                                <Nav className="ms-auto">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                                    <button onClick={() => navigate('/login')} className='theme-btn ms-2'>Login</button >
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;