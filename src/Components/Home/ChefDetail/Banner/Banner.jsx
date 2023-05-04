import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner({chefDetail}) {
    const {} = chefDetail;
  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={8} className="my-5">
            <h1 className="display-4">Welcome to my website</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sed dapibus leo nec ornare diam sed commodo nibh ante facilisis
              bibendum.
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Col>
          <Col md={4}>
            <img
              src="https://via.placeholder.com/500x500"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
