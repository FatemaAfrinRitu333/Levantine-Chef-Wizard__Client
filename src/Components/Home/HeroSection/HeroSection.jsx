import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const HeroSection = () => {
    return (
        <div className="md:vh-100 pt-3 md:pt-5" style={{ backgroundColor: "#E4B363" }}>
            <Container fluid className="p-0">
                <Row className="m-0 container mx-auto">
                    <Col lg={6} className="order-lg-2 align-self-center text-lg-left">
                        <h1 className="mb-3">Welcome to Levantine Chef Wizard</h1>
                        <p className="mb-5 ms-3 text-end">
                            Discover the delicious world of Levantine cuisine with our exclusive collection of recipes from top chefs! Indulge in the rich flavors and aromatic spices of the Middle East with our handpicked selection of dishes that are sure to tantalize your taste buds. From savory dips and spreads to hearty stews and grilled meats, our chefs have curated a diverse range of Levantine dishes that are easy to prepare and guaranteed to impress. Explore our website today and take your culinary journey to the next level!
                        </p>
                        <Button variant="primary" size="lg">
                            Book a Table
                        </Button>
                    </Col>
                    <Col lg={6} className="order-lg-1 p-0">
                        <img
                            src="/public/banner.png"
                            alt="Hero"
                            className="w-100"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
