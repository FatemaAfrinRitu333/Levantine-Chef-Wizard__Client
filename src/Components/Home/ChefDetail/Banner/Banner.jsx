import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiFoodMenu } from "react-icons/bi";
import { TbChefHat } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import LazyLoad from "react-lazyload";

function Banner({ chefDetail }) {
    const { chefPicture, chefName, description, likes, numberOfRecipes, yearsOfExperience } = chefDetail;
    return (
        <div className="py-5">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={3}>
                        <LazyLoad>
                            <img
                                src={chefPicture}
                                alt="placeholder"
                                className="img-fluid rounded"
                            />
                        </LazyLoad>
                    </Col>
                    <Col md={9} className="my-5">
                        <h3 className="display-4 brandName">{chefName}</h3>
                        <p className="brandName">
                            {description}
                        </p>
                        <div className='d-flex justify-content-between gap-2'>
                            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center brandName'>
                                <TbChefHat className="text-warning" />{yearsOfExperience} years of experience</small>
                            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center brandName'>
                                <BiFoodMenu className="text-success" />{numberOfRecipes} recipes made
                            </small>
                            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center brandName'>
                                <AiFillHeart className="text-danger" />{likes} people likes
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
