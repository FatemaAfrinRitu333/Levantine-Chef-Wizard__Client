import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Header() {
  const { logOut, user } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(result => { })
      .catch(error => {
        console.log(error)
      })
  }

  const TooltipLink = ({ id, children, title }) => (
    <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  return (
    <Navbar style={{ backgroundColor: "#E4B363" }} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link className='fw-bolder brandName'>Levantine Chef Wizard</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-custom ms-3'>
          <Nav className="me-auto navbarLink">
            <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-muted"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Home</NavLink>
            <NavLink to="/blog" className={({ isActive, isPending }) =>
                      isActive
                        ? "text-muted"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Blog</NavLink>
          </Nav>
          <Nav className='navbarProfile'>
            {
              user ?
                <span className='d-flex align-items-center'>
                  {
                    user.photoURL ?
                      <TooltipLink title={user?.displayName} id="t-1">
                        <Image style={{ width: '35px', height: '35px' }} className='me-3' src={user.photoURL} roundedCircle />
                      </TooltipLink>
                      :
                      <FaUserAlt className='me-2' />

                  }
                  <Button style={{ backgroundColor: "#4F3A2D", border: 'none' }} onClick={handleLogOut}>
                    Sign Out
                  </Button>
                </span>
                :
                <NavLink to="/signin">
                  <Button style={{ backgroundColor: "#4F3A2D", border: 'none' }}>Sign In</Button>
                </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;