import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

function Newsletter() {

  return (
    <div className="bg-light py-5">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <h2 className='brandName'>Subscribe to our newsletter</h2>
            <p className='brandName'>Get updates on our latest dishes, events, and promotions!</p>
          </Col>
          <Col md={6}>
            <Form className='d-flex w-100 gap-2'>
              <Form.Group controlId="formBasicEmail" className='w-100'>
                <Form.Control 
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Button style={{backgroundColor: 'rgb(228, 179, 99)', color: '#4F3A2D'}} type="submit" className=' border-0 d-flex align-items-center gap-1'>
                <FaPaperPlane/> Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
