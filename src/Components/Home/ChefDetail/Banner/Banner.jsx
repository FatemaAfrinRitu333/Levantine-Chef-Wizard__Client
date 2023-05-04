import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner({chefDetail}) {
    const {chefPicture,chefName,description, likes,numberOfRecipes,yearsOfExperience} = chefDetail;
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={9} className="my-5">
            <h3 className="display-4">{chefName}</h3>
            <p className="lead">
              {description}
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Col>
          <Col md={3}>
            <img
              src={chefPicture}
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
