import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

function Header() {

  
  const {loader, user} = useContext(AuthContext)

  return (
    <Navbar style={{ backgroundColor: "#E4B363" }} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link className='fw-bolder brandName'>Levantine Chef Wizard</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-custom ms-3'>
          <Nav className="me-auto navbarLink">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
          <Nav className='navbarProfile'>
            {
              user ?
                <span className='d-flex align-items-center'>
                  <FaUserAlt className='me-2' />
                  <Link to="">
                    Sign Out
                  </Link>
                  </span>
                :
                <Link to="/signin">
                  Sign In
                </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;