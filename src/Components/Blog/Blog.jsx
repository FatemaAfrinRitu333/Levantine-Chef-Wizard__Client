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
                <Card style={{ backgroundColor: '#ffecce', border: '1px solid #864316'}}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blog;