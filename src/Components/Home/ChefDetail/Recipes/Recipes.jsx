import React, { useState } from 'react';
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Recipes = ({ recipe }) => {

    const [fav, setFav] = useState(false);
    const { recipeName, recipeImg, rating, ingredients, cookingMethod } = recipe;

    const notify = () => toast.success('The recipe is now your favorite!!');
    const handleFavButton = () =>{
        setFav(true);
        notify();
    }

    return (
        <div className="col">
            <div className="card">
                <img src={recipeImg} style={{ height: '400px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title brandName mb-0 d-flex justify-content-between">
                        <>{recipeName}</>
                        <>
                        <button onClick={handleFavButton} className='btn btn-outline-success' disabled={fav}><FaThumbsUp/></button>
                        <Toaster />
                        </>
                    </h4>
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