import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SignUp = () => {

    const { signUp, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const [error, setError] = useState('')
    const [show, setShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        if(password !== confirmPassword){
            setError('Password did not match');
            return
        }
        else if (password.length < 6) {
            setError('Password must be more or equals to six characters.');
            return
        }

        setError('')
        signUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                loggedUser.displayName = name;
                loggedUser.photoURL = photoURL;
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.statusText || error.message)
            })
    }

    const handleGoogleSignIn = () => {
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
            <Form onSubmit={handleSignUp} className="p-5 rounded shadow" style={{ backgroundColor: "#E4B363" }}>
                <h2 className="text-center mb-4 fw-bolder brandName">Please Sign Up Here!</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <span className="d-flex align-items-center">
                        <Form.Control type={confirmShow ? 'text' : 'password'} name="confirmPassword" placeholder="Re-enter password" required />
                        <span onClick={() => setConfirmShow(!confirmShow)} style={{ cursor: 'pointer' }}>
                            {
                                confirmShow ?
                                    <FaEyeSlash className="custom-color ms-2" />
                                    :
                                    <FaEye className="custom-color ms-2" />
                            }
                        </span>
                    </span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="url" name="photoURL" placeholder="Enter photo URL" required />
                </Form.Group>

                {/* Error text */}
                <p className="text-danger"><small>
                    {error}
                </small></p>

                <Button className="w-100 my-3" variant="dark" type="submit">
                    Sign Up
                </Button>
                <div className="d-flex align-items-center w-100 gap-3 mb-3">
                    <hr className="w-100" />
                    or
                    <hr className="w-100" />
                </div>
                <Button onClick={handleGoogleSignIn} className="w-100 my-3 d-flex align-items-center gap-2 justify-content-center" variant="danger" type="submit">
                    <FaGoogle className="mr-2" />
                    Sign up with Google
                </Button>
                <Button onClick={handleGithubSignIn} className="w-100 my-3 d-flex align-items-center gap-2 justify-content-center" variant="dark" type="submit">
                    <FaGithub className="mr-2" />
                    Sign up with Github
                </Button>
                <footer className="text-center fst-italic">
                    <small>Already have an account in Levantine Chef Wizard? <Link to='/signin'>Sign In</Link> here</small>
                </footer>
            </Form>
        </Container >
    );
};

export default SignUp;
