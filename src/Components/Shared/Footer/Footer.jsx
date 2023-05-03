import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#E4B363" }} className="custom-color pt-5">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <h3 className='brandName fw-bold'>Levantine Chef Wizard</h3>
            <p>Discover the delicious world of Levantine cuisine with our exclusive collection of recipes from top chefs!</p>
          </Col>
          <Col md={3} xs={6}>
            <h3 className='brandName'>Links</h3>
            <ul className="navbarLink d-grid">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </Col>
          <Col md={3} xs={6}>
            <h3 className='brandName'>Connect</h3>
            <ul className="navbarLink d-grid">
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p><small>&copy;{new Date().getFullYear()} Levantine Chef Wizard</small></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
