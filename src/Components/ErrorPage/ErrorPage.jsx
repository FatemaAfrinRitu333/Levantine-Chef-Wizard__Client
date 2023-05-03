import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-100" style={{ backgroundColor: "#E4B363" }}>
            <Container style={{ backgroundColor: "#E4B363" }} className="py-5">
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-right">
                        <img src="/public/error.png" alt="Error" className="img-fluid" />
                    </Col>
                    <Col md={6} className="text-center text-md-left my-5">
                        <h1 className="mb-4 custom-color">
                            OOPS!
                        </h1>
                        <p className="mb-4 custom-color">
                            Sorry, an unexpected error has occurred.
                        </p>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <Button style={{ backgroundColor: "#4F3A2D", color: "#ffd99c" }} href="/" className="mr-3 custom-color border-0">
                            Go to Home
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ErrorPage;
