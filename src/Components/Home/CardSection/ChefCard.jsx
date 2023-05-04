import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { TbChefHat } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

  console.log(chef)
  const { chefName, chefPicture, likes, id, numberOfRecipes, yearsOfExperience
  } = chef;

  return (
    <Col>
      <Card>
        <Card.Img className='w-100' variant="top" src={chefPicture} />
        <Card.Body>
          <Card.Title className='brandName fw-bold'>
            {chefName}
          </Card.Title>
          <div className='d-flex justify-content-between gap-2'>
            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center'>
              <TbChefHat />{yearsOfExperience} exp</small>
            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center'>
              <BiFoodMenu />{numberOfRecipes} recipes
            </small>
            <small style={{ backgroundColor: '#ffeac8' }} className='p-2 rounded d-flex align-items-center gap-2 w-100 justify-content-center'>
              <AiFillHeart />{likes} likes
            </small>
          </div>
          <footer className='mt-3'>
            <Link to={`/chefDetail/${id}`}>
              <Button className='border-0 w-100' style={{ backgroundColor: '#E4B363' }}>
                View Recipes
                <FaArrowAltCircleRight className='ms-2' />
              </Button>
            </Link>
          </footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefCard;