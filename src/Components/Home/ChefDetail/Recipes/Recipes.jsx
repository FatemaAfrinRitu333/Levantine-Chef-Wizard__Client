import React from 'react';
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Recipes = ({ recipe }) => {
    console.log(recipe);
    const { recipeName, recipeImg, rating, ingredients, cookingMethod } = recipe;
    return (
        <div className="col">
            <div className="card">
                <img src={recipeImg} style={{ height: '400px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title brandName mb-0">{recipeName}</h4>
                    <hr />
                    <span>
                        <strong>Ingredients:</strong>
                        <ul>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                    </span>
                    <hr />
                    <span>
                        <strong>How to cook:</strong>
                        {
                            cookingMethod.map(cm => <small>{cm}</small>)
                        }
                    </span>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary d-flex gap-3 align-items-center text-warning">
                        {rating}
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar src="assets/images/star-grey.png" className="icon" />}
                            placeholderSymbol={<FaStar src="assets/images/star-red.png" className="icon" />}
                            fullSymbol={<FaStar src="assets/images/star-yellow.png" className="icon" />}
                        />
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Recipes;