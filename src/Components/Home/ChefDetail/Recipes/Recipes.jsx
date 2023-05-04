import React from 'react';
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Recipes = ({ recipe }) => {
    console.log(recipe);
    const { recipeName, recipeImg, rating, ingredients, cookingMethod } = recipe;
    return (
        <div className="col">
            <div className="card">
                <img src={recipeImg} style={{height: '400px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title brandName mb-0">{recipeName}</h4>
                    <br />
                    <span>
                        <strong>Ingredients:</strong>
                        <ul>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                    </span>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Recipes;