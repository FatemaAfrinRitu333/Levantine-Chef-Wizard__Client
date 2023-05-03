import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#E4B363" }} className="custom-color pt-5">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <h3 className='brandName fw-bold'>Levantine Chef Wizard</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet elit vel tellus dignissim, ut aliquam massa elementum.</p>
          </Col>
          <Col md={3} xs={6}>
            <h3 className='brandName'>Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3} xs={6}>
            <h3 className='brandName'>Connect</h3>
            <ul className="list-unstyled">
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Instagram</a></li>
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
