import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import backgroundImage from "/banner2-removebg.png";
import { FaPaperPlane } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div
        className="hero-section d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          minHeight: "500px",
          backgroundColor: '#E4B363'
        }}
      >
        <Container>
          <Row>
            <Col md={6} className="text-center my-auto">
              <h1 className="brandName">Welcome to Levantine Chef Wizard</h1>
              <p style={{ fontFamily: 'cursive' }} className="custom-color">
                Discover the delicious world of Levantine cuisine with our exclusive collection of recipes from top chefs! Indulge in the rich flavors and aromatic spices of the Middle East with our handpicked selection of dishes that are sure to tantalize your taste buds. From savory dips and spreads to hearty stews and grilled meats, our chefs have curated a diverse range of Levantine dishes that are easy to prepare and guaranteed to impress. Explore our website today and take your culinary journey to the next level!
              </p>
              <Form className='d-flex w-100 gap-2'>
              <Form.Group controlId="formBasicEmail" className='w-100'>
                <Form.Control 
                  type="email"
                  placeholder="Enter email to subscribe to out newsletter"
                  required
                />
              </Form.Group>
              <Button style={{backgroundColor: '#4F3A2D', color: 'rgb(228, 179, 99)'}} type="submit" className=' border-0 d-flex align-items-center gap-1'>
                <FaPaperPlane/> Subscribe
              </Button>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;

