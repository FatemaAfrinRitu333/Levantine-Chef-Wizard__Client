import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar style={{ backgroundColor: "#E4B363" }} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link className='fw-bolder brandName'>Levantine Chef Wizard</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-custom ms-3'>
          <Nav className="me-auto navbarLink">
            <Link to="#features">Home</Link>
            <Link to="#pricing">Blog</Link>
          </Nav>
          <Nav className='navbarProfile'>
            <Link to="#deets">More deets</Link>
            <Link eventKey={2} to="#memes">
              Dank memes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;