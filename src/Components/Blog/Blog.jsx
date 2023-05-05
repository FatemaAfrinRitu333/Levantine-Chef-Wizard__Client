import React, { useRef, useState } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import Pdf from 'react-to-pdf'


const Blog = () => {

    const ref = useRef();

    return (
        <div className="my-5 container">
            <Pdf targetRef={ref} filename="levantine-chef-wizard-blog.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf} className="btn btn-outline-warning mb-4">
                        Download as PDF
                    </button>
                )}
            </Pdf>

            <div ref={ref}>
                <Card className='mb-4' style={{ backgroundColor: '#fff6e6', border: '1px solid #864316' }}>
                    <Card.Header className='brandName fw-semibold'>What is the differences between uncontrolled and controlled components?</Card.Header>
                    <Card.Body>
                        <Card.Text className='brandName'>
                            Uncontrolled components are form components that keep their own state internally, and they update their state based on user input. Controlled components, on the other hand, are form components that are fully controlled by React. The state of a controlled component is stored in the parent component, and it is passed down to the component as props. All changes to the component's state are managed by the parent component, and the component re-renders with updated props.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-4' style={{ backgroundColor: '#fff6e6', border: '1px solid #864316' }}>
                    <Card.Header className='brandName fw-semibold'>How to validate React props using PropTypes?</Card.Header>
                    <Card.Body>
                        <Card.Text className='brandName'>
                            PropTypes is a library that is used to specify the type of data that is expected to be passed to a component through its props. To use PropTypes, you need to import it from the 'prop-types' package and then define the PropTypes for each of the props that your component expects.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-4' style={{ backgroundColor: '#fff6e6', border: '1px solid #864316' }}>
                    <Card.Header className='brandName fw-semibold'>Wha is the difference between nodejs and express js?</Card.Header>
                    <Card.Body>
                        <Card.Text className='brandName'>
                            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, which can be useful for building backend services, command line tools, or even desktop or mobile applications. Express.js, on the other hand, is a web application framework for Node.js. It provides a set of tools and utilities for building web applications, such as middleware for handling HTTP requests and responses, routing, and templating. In other words, Node.js is the underlying platform, while Express.js is a framework built on top of Node.js that helps you build web applications more easily.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-4' style={{ backgroundColor: '#fff6e6', border: '1px solid #864316' }}>
                    <Card.Header className='brandName fw-semibold'>What is a custom hook, and why it is needed to create a custom hook?</Card.Header>
                    <Card.Body>
                        <Card.Text className='brandName'>
                            A custom hook is a function in React that allows you to reuse stateful logic across multiple components. Custom hooks are created by extracting stateful logic from existing components and putting it into a separate function. This function can then be used by other components to access that stateful logic. Custom hooks can be useful for abstracting away complex logic and making it easier to manage state across multiple components. You might create a custom hook to handle things like form validation, managing API requests, or handling global state.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blog;