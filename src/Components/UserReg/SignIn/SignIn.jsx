import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center my-5"
        >
            <div className="p-5 rounded shadow" style={{ backgroundColor: "#E4B363" }}>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Button variant="primary" type="submit" className="mb-3 w-100">
                            Submit
                        </Button>
                    </Form.Group>
                    <div className="d-flex align-items-center w-100 gap-3 mb-3">
                        <hr className="w-100" />
                        or
                        <hr className="w-100" />
                    </div>
                    <Button variant="danger" className="mb-3 w-100">
                        <FaGoogle /> Sign in with Google
                    </Button>

                    <Button className="mb-3 w-100" variant="secondary">
                        <FaGithub /> Sign in with Github
                    </Button>
                    <footer className="text-center fst-italic">
                        <small>New to Levantine Chef Wizard? <Link to='/signup'>Sign Up</Link> here</small>
                    </footer>
                </Form>
            </div>
        </Container>
    );
};

export default SignIn;
