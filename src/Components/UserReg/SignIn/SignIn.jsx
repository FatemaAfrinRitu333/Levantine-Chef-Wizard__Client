import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SignIn = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#E4B363" }}
        >
            <div className="p-5 rounded shadow" style={{ backgroundColor: "#fff" }}>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mb-3">
                        Submit
                    </Button>

                    <Button variant="danger" className="me-3">
                        <FaGoogle /> Sign in with Google
                    </Button>

                    <Button variant="dark">
                        <FaGithub /> Sign in with Github
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default SignIn;
