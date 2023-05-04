import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from './Banner/Banner';
import Recipes from './Recipes/Recipes';
import { Row } from 'react-bootstrap';

const ChefDetail = () => {
    const { id } = useParams();
    const chefDetail = useLoaderData();
    const recipes = chefDetail.recipes;
    return (
        <div className='mb-5'>
            <Banner
                key={chefDetail.chefId}
                chefDetail={chefDetail}
            ></Banner>
            <h4 className='brandName fw-bolder container mb-4'>Popular Recipes By {chefDetail.chefName}</h4>
            <Row className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                {
                    recipes.map(recipe => <Recipes
                        key={chefDetail.chefId}
                        recipe={recipe}
                    ></Recipes>)
                }
            </Row>
        </div>
    );
};

export default ChefDetail;