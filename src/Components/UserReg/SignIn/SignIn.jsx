import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SignIn = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const [error, setError] = useState('')
    const [show, setShow] = useState(false);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.statusText || error.message)
            })
    }

    const handleGoogleSignIn = () => {
        setError('')
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.statusText || error.message);
            })
    }

    const handleGithubSignIn = () => {
        setError('')
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.statusText || error.message);
            })
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center my-5"
        >
            <div className="p-5 rounded shadow" style={{ backgroundColor: "#E4B363" }}>
                <h2 className="text-center mb-4 fw-bolder brandName">Please Login Here!</h2>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter your email address" required />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <span className="d-flex align-items-center">
                            <Form.Control type={show ? 'text' : 'password'} name="password" placeholder="Enter password" required />
                            <span onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>
                                {
                                    show ?
                                        <FaEyeSlash className="custom-color ms-2" />
                                        :
                                        <FaEye className="custom-color ms-2" />
                                }
                            </span>
                        </span>
                    </Form.Group>
                    {/* Error text */}
                    <p className="text-danger"><small>
                        {error}
                    </small></p>

                    <Form.Group className="mt-4">
                        <Button variant="primary" type="submit" className="mb-3 w-100">
                            Submit
                        </Button>
                    </Form.Group>
                    <div className="d-flex align-items-center w-100 gap-3 mb-3">
                        <hr className="w-100" />
                        or
                        <hr className="w-100" />
                    </div>
                    <Button onClick={handleGoogleSignIn} variant="danger" className="mb-3 w-100">
                        <FaGoogle /> Sign in with Google
                    </Button>

                    <Button onClick={handleGithubSignIn} className="mb-3 w-100" variant="secondary">
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
